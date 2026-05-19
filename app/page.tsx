export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-[500px]">
        <h1 className="text-4xl font-bold text-center mb-2">
          Avatra
        </h1>

        <p className="text-center text-gray-500 mb-6">
          - アバトラ -
        </p>

        <div className="border-2 border-dashed rounded-xl p-8 text-center">
          <p className="mb-4">
            JSONファイルをアップロード
          </p>

          <button className="bg-violet-600 text-white px-4 py-2 rounded-lg">
            ファイルを選択
          </button>
        </div>
      </div>
    </main>
  );
}