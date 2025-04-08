"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function DownloadButton() {
  const handleDownload = () => {
    const apkUrl = "/daily-verse.apk";
    const link = document.createElement('a');
    link.href = apkUrl;
    link.setAttribute('download', 'daily-verse.apk');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button 
      size="lg" 
      className="bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={handleDownload}
    >
      <Download className="mr-2 h-5 w-5" strokeWidth={1.5} /> Download APK
    </Button>
  );
} 