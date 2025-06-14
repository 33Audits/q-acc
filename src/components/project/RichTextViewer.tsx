import React from 'react';
import 'quill/dist/quill.snow.css';

interface RichTextViewerProps {
  description: string;
}

const RichTextViewer: React.FC<RichTextViewerProps> = ({ description }) => {
  return (
    <div className='container dark border-b-[1px]  px-0  font-redHatText '>
      <style>{`
        .ql-container > .ql-editor {
          word-break: break-word;
          font-size: 16px;
          margin: 0 auto;
          
        }

        .ql-container > .ql-editor p,
        .ql-container > .ql-editor li,
        .ql-container > .ql-editor blockquote {
          line-height: 24px;
        }
        .ql-container > .ql-editor span, .ql-container > .ql-editor strong{
          background-color: transparent !important;
          color: #d4d4d4 !important;
        }

        .ql-container > .ql-editor h1 {
          line-height: 1.2;
          font-size: 3rem;
          margin-bottom: 24px;
        }

        .ql-container > .ql-editor h2 {
          line-height: 1.25;
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
          .ql-container > .ql-editor h3 {
          line-height: 1.3;
          font-size: 2rem;
          margin-bottom: 16px;
        }
          .ql-container > .ql-editor h4 {
          line-height: 1.35;
          font-size: 1.75rem;
          margin-bottom: 12px;
        }
          .ql-container > .ql-editor h5 {
          line-height: 1.4;
          font-size: 1.5rem;
          margin-bottom: 8px;
        }
          .ql-container > .ql-editor h6 {
          line-height: 1.5;
          font-size: 1.25rem;
          margin-bottom: 4px;
        }

        .ql-container > .ql-editor .ql-size-small {
          line-height: 18px;
        }

        .ql-container > .ql-editor .ql-size-large {
          line-height: 36px;
        }

        .ql-container > .ql-editor .ql-size-huge {
          line-height: 56px;
        }

        .ql-container > .ql-editor blockquote {
          border-left: 4px solid #ccc;
          margin-bottom: 5px;
          margin-top: 5px;
          padding-left: 16px;
        }

        .ql-container > .ql-editor img {
          max-width: 100%;
        }

        .ql-video {
        width: 100%;
        min-height: 50vh;
        }
        .ql-container > .ql-editor a {
          color: #FBBA80 !important;
          cursor:pointer;
          background-color: transparent !important;
        }
        
        .ql-code-block-container {
          background-color: #000000 !important;
          color: #ffffff !important;
          padding:4px;
          border-radius:4px;
        }

        .ql-container > .ql-editor a:hover {
          text-decoration: underline !important;
        }
      `}</style>
      <div className='ql-container'>
        <div
          className='ql-editor'
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  );
};

export default RichTextViewer;
