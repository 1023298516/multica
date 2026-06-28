import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "淘宝 AI 运营首页",
  description: "电商 AI 员工团队的老板视角首页原型",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
