/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
"use client";

import { useState } from "react";
import { useDropzone } from "react-dropzone";
// import { toast } from "react-toastify";

export default function UploadData({ setIsOpen }: { setIsOpen: any }) {
  const [fileContents, setFileContents] = useState<any>(null);
  const [uploading, setUploading] = useState(false);

  const onDrop = (acceptedFiles: any) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const fileContent = e.target.result;
      setFileContents(fileContent);
    };
    reader.readAsText(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      maxFiles: 1,
      autoFocus: true,
      maxSize: 1000000,
      accept: {
        "text/csv": [".csv"],
      },
    });

  const handleUpload = async () => {
    setUploading(true);

    // @ts-ignore
    await fetch("/api/generate/template", {
      method: "POST",
      body: acceptedFiles[0],
    })
      .then((res: any) => {
        const data = res.json();
        return data;
      })
      .then((data: any) => {
        console.log("Template generated successfully");
        console.log(data);
        setIsOpen(false);
        setFileContents(null);
        setUploading(false);
      })
      .catch((err: any) => {
        console.log(err);
        setUploading(false);
        console.log("Something went wrong");
      });

    return;
  };

  if (uploading) {
    return (
      <div
        className={`my-4 box-border flex h-80 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-base-content p-4 text-sm text-base-content`}
      >
        Processing...This may take a minute.
      </div>
    );
  }

  if (fileContents) {
    return (
      <>
        <div
          className={`my-4 box-border flex h-80 w-full cursor-pointer flex-col items-center justify-start rounded-lg border border-base-content p-4 text-primary`}
        >
          <h3 className="mb-4 text-sm uppercase text-accent">File preview</h3>
          <FilePreview fileContents={fileContents} />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="btn btn-primary mr-2"
            onClick={() => setFileContents(null)}
          >
            Reset
          </button>
          <button
            className="btn btn-primary-accent ml-2"
            onClick={() => handleUpload()}
          >
            Upload
          </button>
        </div>
      </>
    );
  }

  return (
    <div
      className={`focus:outline-accent3 my-4 flex h-80 w-full cursor-pointer items-center justify-center rounded-lg border border-base-content p-4 text-primary ${
        isDragActive ? `border-accent3 border-dashed` : ``
      }`}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Let it go, let it go...</p>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="w-full text-center text-sm text-base-content">
            Drag and drop or click here to upload your csv file.
          </p>
        </div>
      )}
    </div>
  );
}

function FilePreview({ fileContents }: { fileContents: string }) {
  const data = fileContents.split(`\r`);

  return (
    <div className="w-full border-[0.5px] border-base-content">
      {data.map((row: string, index: number) => {
        const values = row.split(",");
        return (
          <div
            key={index}
            id="grid-container"
            className={`${index === 0 ? `font-bold` : ``} flex w-full flex-row`}
          >
            {values.map((field, index) => {
              return (
                <div
                  className="w-full min-w-[80px] overflow-hidden overflow-ellipsis border-[0.5px] border-base-content p-2 text-xs text-base-content hover:text-accent"
                  key={index}
                >
                  {field}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
