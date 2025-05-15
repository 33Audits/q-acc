"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, ExternalLink } from "lucide-react";
import { getPoolAddressByPair } from "@/helpers/getTokensListedData";
import config from "@/config/configuration";

interface GeckoTerminalChartProps {
  tokenSymbol: string;
  tokenAddress: string;
}

export function GeckoTerminalChart({
  tokenAddress,
  tokenSymbol,
}: GeckoTerminalChartProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [projectPoolAddress, setProjectPoolAddress] = useState<string | null>(
    null
  );
  const [isTokenListed, setIsTokenListed] = useState<boolean>(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //     if (!projectPoolAddress) {
  //       setError("Chart data not available for this token");
  //     }
  //   }, 2000);

  //   return () => clearTimeout(timer);
  // }, [projectPoolAddress]);

  useEffect(() => {
    const fetchPoolAddress = async () => {
      if (tokenAddress) {
        const { poolAddress, isListed } = await getPoolAddressByPair(
          tokenAddress,
          config.WPOL_TOKEN_ADDRESS
        );
        setProjectPoolAddress(poolAddress);
        setIsTokenListed(isListed);
        console.log("poolAddress", poolAddress);
      }
    };

    fetchPoolAddress();
  }, [tokenAddress]);



  const showIframe = projectPoolAddress !== null;

  if (error || !isTokenListed) {
    return (
      <Card className="bg-neutral-800 rounded-2xl mb-8">
        <CardContent className="py-6">
          <div className="flex flex-col justify-center items-center h-[400px]">
            <p className="text-muted-foreground dark:text-gray-400 mb-4">
              {error || "Chart temporarily unavailable for this token"}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  

  return (
    <div className="relative my-8">
      {isLoading && (
        <div className="absolute inset-0 flex justify-center items-center bg-white/80 dark:bg-black/80 z-10">
          <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mr-2" />
          <p className="text-muted-foreground dark:text-gray-400">
            Loading chart data...
          </p>
        </div>
      )}

      {isTokenListed && projectPoolAddress && (
        <div className="w-full h-[400px] bg-neutral-800/50 p-4 rounded-2xl">
          <iframe
            src={`https://www.geckoterminal.com/polygon_pos/pools/${projectPoolAddress}?embed=1&info=0&swaps=0&grayscale=1&light_chart=0&chart_type=price&resolution=1h&chartvalues=1&toolbar=0&theme=dark`}
            title={`${tokenSymbol} Price Chart`}
            width="100%"
            height="100%"
            onLoad={() => setIsLoading(false)}
            className="rounded-2xl"
            allow="clipboard-write"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
