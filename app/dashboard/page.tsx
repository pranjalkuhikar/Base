"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Bell, Upload } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import SideNav from "../components/SideNav";
import { useToast } from "@/components/ui/use-toast";

function generateRandomId(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
const Page: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [tags, setTags] = useState<string[][]>([]);
  const [prefixes, setPrefixes] = useState<string[]>([]);
  const { toast } = useToast();
  const handleUploadClick = () => {
    document.getElementById("file-upload")?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      setFiles([...files, ...Array.from(selectedFiles)]);
      setTags([
        ...tags,
        ...Array.from({ length: selectedFiles.length }, () => []),
      ]);
      setPrefixes([
        ...prefixes,
        ...Array.from({ length: selectedFiles.length }, () =>
          generateRandomId(8)
        ),
      ]);
    }
  };

  const handleFileUpload = (event: React.FormEvent) => {
    event.preventDefault();
    // console.log(files);
    toast({
      description: "File Uploaded",
    });
  };

  const handleTagChange = (index: number, newTags: string[]) => {
    const updatedTags = [...tags];
    updatedTags[index] = newTags;
    setTags(updatedTags);
  };

  return (
    <div className="flex items-start w-full h-screen">
      <SideNav />
      <main className="w-[100%] sm:w-[80%] overflow-auto h-full bg-white dark:bg-[#242424] min-w-screen">
        <div className="flex items-center justify-between p-8 border-b-[1px] border-gray-300">
          <div className="text-xl font-semibold text-primary">Upload CSV</div>
          <div className="flex items-center gap-10 text-primary">
            <Bell />
            <UserButton />
          </div>
        </div>
        <form
          className="flex flex-col items-center justify-center w-full h-2/3 px-10 sm:px-0"
          onSubmit={handleFileUpload}
        >
          <div className="relative bg-white dark:bg-black w-[30rem] h-[25rem] rounded-lg text-center flex flex-col p-7 items-center justify-center">
            <input
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
              multiple
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer w-full h-full mb-4"
            >
              <div className="border-[1px] w-full font-medium h-full mx-auto flex items-center justify-center rounded-lg text-gray-500 border-dotted border-gray-300 mb-3">
                <div className="flex flex-col items-center">
                  <div>
                    <Image
                      src="/excel.png"
                      alt="App Logo"
                      width={30}
                      height={35}
                    />
                  </div>
                  <div>
                    Drop your excel sheet here or
                    <span className="text-[#605bff] ml-2">browse</span>
                  </div>
                </div>
              </div>
            </label>
            <Button
              type="button"
              onClick={handleUploadClick}
              className="gap-3 w-full dark:text-white"
            >
              <Upload />
              Upload
            </Button>
          </div>
        </form>
        {files.length > 0 && (
          <div className="px-8 sm:p-8 w-fit sm:w-full">
            <h2 className="text-lg font-semibold mb-4 text-primary">Uploads</h2>
            <div className="rounded-lg">
              <table className="w-full bg-gray-300 dark:bg-black text-center divide-y divide-gray-200 rounded-xl">
                <thead className="bg-gray-900 rounded-lg text-white">
                  <tr>
                    <th className="py-3 px-6">No.</th>
                    <th className="py-3 px-6">Links</th>
                    <th className="py-3 px-6">Prefix</th>
                    <th className="py-3 px-6">Add Tags</th>
                    <th className="py-3 px-6">Selected Tags</th>
                  </tr>
                </thead>
                <tbody className="bg-primary-foreground">
                  {files.map((file, index) => (
                    <tr key={index} className="">
                      <td className="py-4 px-6">{index + 1}</td>
                      <td className="py-4 px-6">{file.name}</td>
                      <td className="py-4 px-6">{prefixes[index]}</td>{" "}
                      <td className="py-4 px-6">
                        <select
                          value={tags[index]}
                          title="Select tags"
                          onChange={(e) =>
                            handleTagChange(
                              index,
                              Array.from(
                                e.target.selectedOptions,
                                (option) => option.value
                              )
                            )
                          }
                          className="w-full py-2 pl-10 text-sm text-gray-700 rounded-lg border-gray-400 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="">Select Tag</option>
                          <option value="Technology">Technology</option>
                          <option value="Fashion">Fashion</option>
                          <option value="Food">Food</option>
                          <option value="Travel">Travel</option>
                          <option value="Sports">Sports</option>
                          <option value="Music">Music</option>
                          <option value="Art">Art</option>
                          <option value="Health">Health</option>
                          <option value="Education">Education</option>
                          <option value="Finance">Finance</option>
                        </select>
                      </td>
                      <td className="py-4 px-6">
                        {tags[index].map((tag) => (
                          <span
                            key={tag}
                            className="bg-blue-100 text-blue-500 px-2 py-1 rounded-full mr-2 inline-block"
                          >
                            {tag}
                          </span>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Page;
