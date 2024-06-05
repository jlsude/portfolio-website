import React from "react";
import packageJson from "../../package.json";
import Link from "next/link";

export default function Footer() {
  const { version } = packageJson;

  const data = [
    {
      platform: "GitHub",
      url: "https://github.com/jlsude",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/jlsude/",
    },
    {
      platform: "OnlineJobs.ph",
      url: "https://google.com",
    },
    {
      platform: "Upwork",
      url: "https://www.upwork.com/freelancers/~012761a013c53f8aa9?viewMode=1",
    },
    {
      platform: "JobStreet",
      url: "https://www.jobstreet.com.ph/profile/johnlouie-sude-PqVnjcKq0F",
    },
    {
      platform: "Gmail",
      url: "https://mail.google.com/mail/u/0/?source=mailto&to=sudejohnlouie@gmail.com&fs=1&tf=cm",
    },
  ];

  return (
    <footer className="flex h-[650px] w-screen items-center justify-center bg-[#231D18] px-[30px] pb-[100px] pt-[70px] shadow-md sm:h-[600px]">
      <div className="flex h-full w-full max-w-[1400px] flex-col items-center rounded-2xl bg-secondary/30 p-8">
        <h2>let's connect!</h2>
        <ul className="mt-10 grid grid-cols-1 grid-rows-6 gap-x-[100px] gap-y-5 text-center sm:grid-cols-3 sm:grid-rows-2">
          {data.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  href={item?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h4>{item?.platform}</h4>
                </Link>
              </li>
            );
          })}
        </ul>

        <small className="mt-auto">© 2024. All Rights Reserved</small>
      </div>
    </footer>
  );
}
