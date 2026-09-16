"use client";

import Link from "next/link";
import { Play, Download, Share2, ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function DemoVideoPage() {
  const [copied, setCopied] = useState(false);

  const videoUrl = "https://the-project-of-ishit-and-mitali.vercel.app/demo-video.mp4";

  const handleCopy = () => {
    if (typeof navigator !== "undefined") {
      navigator.clipboard.writeText(videoUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-900/50 backdrop-blur-md px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition px-3 py-1.5 rounded-lg bg-slate-800/50 hover:bg-slate-800"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to App
          </Link>
          <div className="h-4 w-px bg-slate-800" />
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Official Project Walkthrough
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 text-blue-300 text-xs font-medium transition active:scale-95"
          >
            {copied ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Link Copied!
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" /> Copy Share Link
              </>
            )}
          </button>

          <a
            href="/demo-video.mp4"
            download="LOOP_Walkthrough_Demo_Video_Ishit_and_Mitali.mp4"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition active:scale-95 border border-slate-700"
          >
            <Download className="w-3.5 h-3.5" /> Download MP4
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 flex flex-col items-center">
        <div className="text-center max-w-2xl mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Verified Zidio Development Internship Submission
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            LOOP Platform Walkthrough & Feature Demo
          </h1>
          <p className="text-sm text-slate-400">
            Recorded project walkthrough demonstrating the core intelligence features, sentiment trends, RAG voice copilot, and team governance built by <span className="text-slate-200 font-semibold">Ishit Jain</span> and <span className="text-slate-200 font-semibold">Mitali</span>.
          </p>
        </div>

        {/* Video Player Card */}
        <div className="w-full rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-2xl relative aspect-video max-h-[620px] flex items-center justify-center">
          <video
            src="/demo-video.mp4"
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Metadata & Quick Links Card */}
        <div className="w-full mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs text-slate-400 font-medium mb-1">Direct Video URL</div>
            <a
              href="/demo-video.mp4"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-blue-400 hover:underline flex items-center gap-1 font-mono break-all"
            >
              /demo-video.mp4 <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs text-slate-400 font-medium mb-1">Project Creators</div>
            <div className="text-xs font-semibold text-slate-200">
              Ishit Jain & Mitali
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-xs text-slate-400 font-medium mb-1">Duration & Quality</div>
            <div className="text-xs font-semibold text-slate-200">
              01:39 &bull; HD H.264 Audio & Video
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
