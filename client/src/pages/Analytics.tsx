import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

const serviceViewsData = [
  { name: "Seg", "Scan 3D": 45, "Modelagem Paramétrica": 52, "Prototipagem Técnica": 38 },
  { name: "Ter", "Scan 3D": 52, "Modelagem Paramétrica": 48, "Prototipagem Técnica": 42 },
  { name: "Qua", "Scan 3D": 38, "Modelagem Paramétrica": 61, "Prototipagem Técnica": 55 },
  { name: "Qui", "Scan 3D": 65, "Modelagem Paramétrica": 54, "Prototipagem Técnica": 48 },
  { name: "Sex", "Scan 3D": 72, "Modelagem Paramétrica": 68, "Prototipagem Técnica": 62 },
  { name: "Sáb", "Scan 3D": 58, "Modelagem Paramétrica": 45, "Prototipagem Técnica": 51 },
  { name: "Dom", "Scan 3D": 42, "Modelagem Paramétrica": 39, "Prototipagem Técnica": 35 },
];

const serviceDistribution = [
  { name: "Scan 3D", value: 372 },
  { name: "Modelagem Paramétrica", value: 367 },
  { name: "Prototipagem Técnica", value: 331 },
];

const COLORS = ["#0ea5e9", "#a855f7", "#06b6d4"];

const metrics = [
  {
    label: "Total de visualizações",
    value: "1.070",
    change: "+12%",
    positive: true,
  },
  {
    label: "Serviço mais visualizado",
    value: "Scan 3D",
    change: "372 views",
    positive: true,
  },
  {
    label: "Taxa média de clique",
    value: "34%",
    change: "+5%",
    positive: true,
  },
  {
    label: "Tempo médio na página",
    value: "3m 24s",
    change: "+45s",
    positive: true,
  },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      <div className="bg-gradient-to-r from-foreground via-secondary/10 to-foreground py-12 text-white">
        <div className="container">
          <Link href="/">
            <a className="mb-6 inline-flex items-center gap-2 text-white/80 transition hover:text-white">
              <ArrowLeft className="h-4 w-4" />
              Voltar para a home
            </a>
          </Link>
          <h1 className="mb-2 text-4xl font-bold">Analytics do Studio</h1>
          <p className="text-white/80">
            Acompanhe as métricas de visualização dos serviços e identifique padrões de interesse.
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="mb-12 grid gap-6 md:grid-cols-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-border bg-white p-6 transition-all hover:shadow-lg"
            >
              <p className="mb-2 text-sm text-muted-foreground">{metric.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-bold text-foreground">{metric.value}</h3>
                <span
                  className={`text-sm font-semibold ${
                    metric.positive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 grid gap-8 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-white p-8 lg:col-span-2">
            <h2 className="mb-6 font-bold text-foreground">
              Visualizações por serviço nos últimos 7 dias
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={serviceViewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="name" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="Scan 3D"
                  stroke="#0ea5e9"
                  strokeWidth={2}
                  dot={{ fill: "#0ea5e9", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="Modelagem Paramétrica"
                  stroke="#a855f7"
                  strokeWidth={2}
                  dot={{ fill: "#a855f7", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="Prototipagem Técnica"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  dot={{ fill: "#06b6d4", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-2xl border border-border bg-white p-8">
            <h2 className="mb-6 font-bold text-foreground">Distribuição de visualizações</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={serviceDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {serviceDistribution.map((entry, index) => (
                    <Cell key={`${entry.name}-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-8">
          <h2 className="mb-6 font-bold text-foreground">Métricas detalhadas por serviço</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-4 py-3 text-left text-sm font-semibold text-foreground">
                    Serviço
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                    Visualizações
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                    Cliques
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                    Taxa de clique
                  </th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-foreground">
                    Tempo médio
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border transition hover:bg-muted/50">
                  <td className="px-4 py-4 text-foreground">Scan 3D</td>
                  <td className="px-4 py-4 text-center text-foreground">372</td>
                  <td className="px-4 py-4 text-center text-foreground">128</td>
                  <td className="px-4 py-4 text-center">
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      34,4%
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center text-foreground">4m 12s</td>
                </tr>
                <tr className="border-b border-border transition hover:bg-muted/50">
                  <td className="px-4 py-4 text-foreground">Modelagem Paramétrica</td>
                  <td className="px-4 py-4 text-center text-foreground">367</td>
                  <td className="px-4 py-4 text-center text-foreground">122</td>
                  <td className="px-4 py-4 text-center">
                    <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                      33,2%
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center text-foreground">3m 58s</td>
                </tr>
                <tr className="transition hover:bg-muted/50">
                  <td className="px-4 py-4 text-foreground">Prototipagem Técnica</td>
                  <td className="px-4 py-4 text-center text-foreground">331</td>
                  <td className="px-4 py-4 text-center text-foreground">108</td>
                  <td className="px-4 py-4 text-center">
                    <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                      32,6%
                    </span>
                  </td>
                  <td className="px-4 py-4 text-center text-foreground">3m 15s</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-gradient-to-r from-accent/5 to-secondary/5 p-8">
          <h2 className="mb-4 font-bold text-foreground">Insights principais</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="font-bold text-accent">•</span>
              <span>
                <strong>Scan 3D</strong> lidera em visualizações e segue como principal porta de
                entrada para novos interessados.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-accent">•</span>
              <span>
                <strong>Modelagem Paramétrica</strong> apresenta bom equilíbrio entre volume de
                tráfego e profundidade de interesse.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-accent">•</span>
              <span>
                <strong>Prototipagem Técnica</strong> tem espaço para crescer com mais exemplos
                práticos e cases visíveis na navegação principal.
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-white p-8">
          <h2 className="mb-6 font-bold text-foreground">Comparativo semanal</h2>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={serviceViewsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Scan 3D" fill="#0ea5e9" radius={[6, 6, 0, 0]} />
              <Bar dataKey="Modelagem Paramétrica" fill="#a855f7" radius={[6, 6, 0, 0]} />
              <Bar dataKey="Prototipagem Técnica" fill="#06b6d4" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
