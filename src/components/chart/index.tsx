"use client"

import { DollarSign } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"

import { CartesianGrid, XAxis, Bar, BarChart } from "recharts"

export default function Dashboard() {
  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ]


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Dashboard Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-gray-800">Dashboard de Vendas</h1>
        <p className="text-gray-500">Visão geral das vendas e desempenho</p>
      </div>

      {/* Dashboard Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 - Overview de Vendas */}
        <Card className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg sm:text-xl text-gray-800">Overview Vendas</CardTitle>
              <DollarSign className="w-4 h-4 text-gray-600" />
            </div>
          </CardHeader>
          <CardContent className="min-h-[200px] w-full">
            <BarChart data={chartData}>
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="month"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)}
              />
              <Bar dataKey="desktop" fill="#2563eb" radius={4} />
              <Bar dataKey="mobile" fill="#60a5fa" radius={4} />
            </BarChart>
          </CardContent>
        </Card>

        {/* Card 2 - Vendas Totais */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl text-gray-800">Vendas Totais</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">R$ 15.320,00</h3>
              <p className="text-gray-500">Total de vendas em junho</p>
            </div>
            <div className="text-4xl font-semibold text-blue-600">+12%</div>
          </CardContent>
        </Card>

        {/* Card 3 - Produtos Mais Vendidos */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl text-gray-800">Produtos Mais Vendidos</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span>Produto A</span>
                <span className="font-semibold">R$ 5.200,00</span>
              </li>
              <li className="flex justify-between">
                <span>Produto B</span>
                <span className="font-semibold">R$ 3.400,00</span>
              </li>
              <li className="flex justify-between">
                <span>Produto C</span>
                <span className="font-semibold">R$ 2.500,00</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Card 4 - Taxa de Conversão */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl text-gray-800">Taxa de Conversão</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">4.5%</h3>
              <p className="text-gray-500">Conversão média nos últimos 30 dias</p>
            </div>
            <div className="text-xl font-semibold text-green-600">+0.5%</div>
          </CardContent>
        </Card>

        {/* Card 5 - Novos Clientes */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl text-gray-800">Novos Clientes</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">152</h3>
              <p className="text-gray-500">Novos clientes este mês</p>
            </div>
            <div className="text-xl font-semibold text-orange-600">+8%</div>
          </CardContent>
        </Card>

        {/* Card 6 - Visitas ao Site */}
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl text-gray-800">Visitas ao Site</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">32.540</h3>
              <p className="text-gray-500">Visitas no último mês</p>
            </div>
            <div className="text-xl font-semibold text-red-600">-3%</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
