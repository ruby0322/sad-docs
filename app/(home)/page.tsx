import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-center px-4 max-w-4xl mx-auto py-20">
      <h1 className="mb-4 text-4xl font-bold">系統設計與分析 SAD 114-2</h1>
      <h2 className="mb-8 text-2xl text-fd-muted-foreground">
        第三週、第六週、第十一週｜助教實作課程
      </h2>

      <p className="text-lg mb-8 max-w-2xl">
        歡迎加入實戰課程！我們將在第三週建立 Git / GitHub
        協作基礎，第六週深入 Docker、Docker Compose 與雲端原生，第十一週透過
        單元測試、Playwright 與 GitHub Actions 實踐 DevOps。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 w-full max-w-2xl">
        <div className="border rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold mb-2">課程大綱</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>第三週：Version Control、Git、GitHub</li>
            <li>第六週：Container（Docker、Docker Compose）與雲端原生</li>
            <li>第十一週：DevOps（unittest、Playwright、GitHub Actions）</li>
          </ul>
        </div>

        <div className="border rounded-lg p-6 text-left">
          <h3 className="text-xl font-semibold mb-2">你將帶走什麼？</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>可重現的版控與分支協作習慣</li>
            <li>容器化與多服務編排的一手經驗</li>
            <li>自動化測試與 CI 的基本實作能力</li>
          </ul>
        </div>
      </div>

      <Link
        href="/docs"
        className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        查看課程文件
      </Link>
    </main>
  );
}
