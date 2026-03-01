import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

/**
 * DESIGN PHILOSOPHY: Futurism Organic
 * - Data visualization with clean, modern charts
 * - Professional analytics dashboard
 */

// Mock data - em produção, isso viria de uma API
const serviceViewsData = [
  { name: "Seg", "Scan 3D": 45, "Modelagem Paramétrica": 52, "Prototipagem Técnica": 38 },
  { name: "Ter", "Scan 3D": 52, "Modelagem Paramétrica": 48, "Prototipagem Técnica": 42 },
  { name: "Qua", "Scan 3D": 38, "Modelagem Paramétrica": 61, "Prototipagem Técnica": 55 },
  { name: "Qui", "Scan 3D": 65, "Modelagem Paramétrica": 54, "Prototipagem Técnica": 48 },
  { name: "Sex", "Scan 3D": 72, "Modelagem Paramétrica": 68, "Prototipagem Técnica": 62 },
  { name: "Sab", "Scan 3D": 58, "Modelagem Paramétrica": 45, "Prototipagem Técnica": 51 },
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
    label: "Total de Visualizações",
    value: "1,070",
    change: "+12%",
    positive: true,
  },
  {
    label: "Serviço Mais Visualizado",
    value: "Scan 3D",
    change: "372 views",
    positive: true,
  },
  {
    label: "Taxa de Clique",
    value: "34%",
    change: "+5%",
    positive: true,
  },
  {
    label: "Tempo Médio na Página",
    value: "3m 24s",
    change: "+45s",
    positive: true,
  },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-white text-foreground">
      {/* Header */}
      <div className="bg-gradient-to-r from-foreground via-secondary/10 to-foreground text-white py-12">
        <div className="container">
          <Link href="/">
            <a className="inline-flex items-center gap-2 text-white/80 hover:text-white transition mb-6">
              <ArrowLeft className="w-4 h-4" />
              Voltar para Home
            </a>
          </Link>
          <h1 className="text-4xl font-bold mb-2">Analytics do Studio</h1>
          <p className="text-white/80">
            Acompanhe as métricas de visualização dos serviços
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container py-12">
        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-all"
            >
              <p className="text-sm text-muted-foreground mb-2">{metric.label}</p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-3xl font-bold text-foreground">
                  {metric.value}
                </h3>
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

        {/* Charts */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Line Chart - Visualizações ao longo do tempo */}
          <div className="lg:col-span-2 bg-white border border-border rounded-2xl p-8">
            <h2 className="text-foreground font-bold mb-6">
              Visualizações por Serviço (Últimos 7 dias)
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

          {/* Pie Chart - Distribuição de visualizações */}
          <div className="bg-white border border-border rounded-2xl p-8">
            <h2 className="text-foreground font-bold mb-6">
              Distribuição de Visualizações
            </h2>
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
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Detailed Metrics Table */}
        <div className="bg-white border border-border rounded-2xl p-8">
          <h2 className="text-foreground font-bold mb-6">
            Métricas Detalhadas por Serviço
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">
                    Serviço
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-foreground">
                    Visualizações
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-foreground">
                    Cliques
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-foreground">
                    Taxa de Clique
                  </th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-foreground">
                    Tempo Médio
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-muted/50 transition">
                  <td className="py-4 px-4 text-foreground">Scan 3D</td>
                  <td className="text-center py-4 px-4 text-foreground">372</td>
                  <td className="text-center py-4 px-4 text-foreground">128</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                      34.4%
                    </span>
                  </td>
                  <td className="text-center py-4 px-4 text-foreground">
                    4m 12s
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-muted/50 transition">
                  <td className="py-4 px-4 text-foreground">
                    Modelagem Paramétrica
                  </td>
                  <td className="text-center py-4 px-4 text-foreground">367</td>
                  <td className="text-center py-4 px-4 text-foreground">122</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
                      33.2%
                    </span>
                  </td>
                  <td className="text-center py-4 px-4 text-foreground">
                    3m 58s
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 transition">
                  <td className="py-4 px-4 text-foreground">
                    Prototipagem Técnica
                  </td>
                  <td className="text-center py-4 px-4 text-foreground">331</td>
                  <td className="text-center py-4 px-4 text-foreground">108</td>
                  <td className="text-center py-4 px-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                      32.6%
                    </span>
                  </td>
                  <td className="text-center py-4 px-4 text-foreground">
                    3m 15s
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Insights */}
        <div className="mt-12 bg-gradient-to-r from-accent/5 to-secondary/5 border border-border rounded-2xl p-8">
          <h2 className="text-foreground font-bold mb-4">Insights Principais</h2>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                <strong>Scan 3D</strong> é o serviço mais visualizado com 372
                visualizações (34.8% do total)
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                A taxa de clique média é de <strong>33.4%</strong>, indicando
                interesse significativo dos visitantes
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                Visitantes passam em média <strong>3m 48s</strong> nas páginas
                de serviço, mostrando engajamento elevado
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span>
                Sexta-feira é o dia com maior volume de visualizações (197
                total), sugerindo planejamento de projetos no fim de semana
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 mt-12">
        <div className="container text-center">
          <p className="text-white/60">
            Dados atualizados em tempo real. Última atualização: 1º de março de
            2026
          </p>
        </div>
      </footer>
    </div>
  );
}
