"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiArrowLeft,
  FiDownload,
  FiMaximize2,
  FiMinimize2,
  FiX,
} from "react-icons/fi";

export function ResumeViewer() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20 pb-10">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Resume
          </h1>
          <h2 className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
            Himanshu Jain — Software Engineer
          </h2>

          <div className="flex gap-3 items-center justify-between">
            <Link
              href="/"
              className="group relative inline-flex items-center justify-center w-10 h-10 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              title="Back to Portfolio"
            >
              <FiArrowLeft className="text-lg" />
            </Link>

            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                download="Himanshu_Jain_Resume.pdf"
                className="group relative inline-flex items-center justify-center w-10 h-10 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                title="Download PDF"
              >
                <FiDownload className="w-4 h-4" />
              </a>

              <button
                onClick={toggleFullscreen}
                className="group relative inline-flex items-center justify-center w-10 h-10 bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                title={isFullscreen ? "Exit Fullscreen" : "View Fullscreen"}
              >
                {isFullscreen ? (
                  <FiMinimize2 className="w-4 h-4" />
                ) : (
                  <FiMaximize2 className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div
          className={`bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden shadow-lg ${
            isFullscreen ? "fixed inset-4 z-50" : ""
          }`}
        >
          <div className="bg-neutral-200 dark:bg-neutral-800 px-4 py-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-sm text-neutral-600 dark:text-neutral-400 font-mono">
              Himanshu_Jain_Resume.pdf
            </span>
            {isFullscreen && (
              <button
                onClick={toggleFullscreen}
                className="group relative inline-flex items-center justify-center w-10 h-10 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                title="Exit Fullscreen"
              >
                <FiX className="w-4 h-4" />
              </button>
            )}
          </div>
          <div
            className={`w-full ${
              isFullscreen ? "h-[calc(100vh-8rem)]" : "h-[800px]"
            }`}
          >
            <iframe
              src="/resume.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
              className="w-full h-full border-0"
              title="Himanshu Jain Resume"
            />
          </div>
        </div>

        {/* Footer Info */}
        {!isFullscreen && (
          <div className="mt-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
            <p>
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <p className="mt-2">
              For the latest version, please visit{" "}
              <a
                href="https://www.himanshu.works/resume"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                himanshu.works/resume
              </a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
