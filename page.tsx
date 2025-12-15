import { requireAuth } from "@/lib/auth"
import { NewCaseForm } from "@/components/cases/new-case-form"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"

export default async function NewCasePage() {
  const user = await requireAuth(["dentist"])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30">
      <DashboardHeader user={user} />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Novo Caso Ortodôntico</h1>
          <p className="text-slate-600">Preencha as informações do paciente e faça upload dos arquivos necessários</p>
        </div>

        <NewCaseForm dentist={user} />
      </main>
    </div>
  )
}
