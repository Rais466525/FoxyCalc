'use client'

import { useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InformationTheoryCalculator() {
  const [x, setX] = useState("bbcabaabacabbacbbaccbbaccbbddadadad")
  const [y, setY] = useState("ccabacabbacbbaccabcabbaccbbddadadab")
  const [results, setResults] = useState<any>({})

  const m_1 = Array.from(new Set((y + x).split(''))).sort()

  function count(str: string, char: string) {
    return str.split(char).length - 1
  }

  function one(a: string, m: string[]) {
    let r_1 = m.map(l => count(a, l))
    let r = r_1.reduce((a, b) => a + b, 0)
    r_1.push(r)
    return r_1
  }

  function one_1(a: string, m: string[]) {
    let v_1 = one(a, m)
    let r_1_2 = v_1.slice(0, -1).map(l => {
      const result = Math.floor((l / v_1[v_1.length - 1]) * 1000) / 1000
      return isNaN(result) ? 0 : result
    })
    let r = r_1_2.reduce((a, b) => a + b, 0)
    r_1_2.push(Math.ceil(r))
    return r_1_2
  }

  function two(a: string, m: string[]) {
    let mf = one_1(a, m)
    let P = mf.reduce((acc, val) => acc + (val > 0 ? val * Math.log2(val) : 0), 0)
    const result = Math.ceil(Math.abs(P) * 1000) / 1000
    return isNaN(result) ? 0 : result
  }

  function th(a_1: string, b_1: string, m: string[], v: number) {
    let r = [0, 0, 0, 0]
    for (let i = 0; i < Math.min(a_1.length, b_1.length); i++) {
      if (a_1[i] === m[v]) {
        if (b_1[i] === m[0]) r[0]++
        else if (b_1[i] === m[1]) r[1]++
        else if (b_1[i] === m[2]) r[2]++
        else if (b_1[i] === m[3]) r[3]++
      }
    }
    return r
  }

  function for_4(a_mk: number[], b_m: number[]) {
    return b_m.map((val, idx) => {
      const result = Math.ceil((val / (a_mk[idx] || 1)) * 1000) / 1000
      return isNaN(result) ? 0 : result
    })
  }

  function sum_N(a: number[], b: number[], c: number[], d: number[]) {
    return [a, b, c, d].reduce((acc, arr) => acc.map((val, idx) => val + (arr[idx] || 0)), [0, 0, 0, 0])
  }

  function f_m1(mf: number[]) {
    let P = mf.reduce((acc, val) => acc + (val > 0 ? val * Math.log2(val) : 0), 0)
    const result = Math.floor(Math.abs(P) * 1000) / 1000
    return isNaN(result) ? 0 : result
  }

  function f_m2(a: string, b: string) {
    return [0, 1, 2, 3].map(i => f_m1(for_4(one(a, m_1), th(a, b, m_1, i))))
  }

  function five(a_F: number[], b_M: number[]) {
    let P = a_F.reduce((acc, val, idx) => acc + val * (b_M[idx] || 0), 0)
    const result = Math.ceil(Math.abs(P) * 10) / 10
    return isNaN(result) ? 0 : result
  }

  function letterMatchesByIndex(a: string, b: string) {
    const minLength = Math.min(a.length, b.length)
    const matches = m_1.map(() => 0)
    for (let i = 0; i < minLength; i++) {
      const indexA = m_1.indexOf(a[i])
      const indexB = m_1.indexOf(b[i])
      if (indexA !== -1) matches[indexA]++
      if (indexB !== -1) matches[indexB]++
    }
    return matches
  }

  function calculate() {
    const one_x = one(x, m_1)
    const one_y = one(y, m_1)
    const one_1_x = one_1(x, m_1)
    const one_1_y = one_1(y, m_1)
    
    setResults({
      one_x,
      one_y,
      one_1_x,
      one_1_y,
      two_x: two(x, m_1),
      two_y: two(y, m_1),
      th_xy: [0, 1, 2, 3].map(i => th(x, y, m_1, i)),
      th_yx: [0, 1, 2, 3].map(i => th(y, x, m_1, i)),
      for_4_x: [0, 1, 2, 3].map(i => for_4(one_x, th(x, y, m_1, i))),
      for_4_y: [0, 1, 2, 3].map(i => for_4(one_y, th(y, x, m_1, i))),
      sum_N_x: sum_N(...[0, 1, 2, 3].map(i => for_4(one_x, th(x, y, m_1, i)))),
      sum_N_y: sum_N(...[0, 1, 2, 3].map(i => for_4(one_y, th(y, x, m_1, i)))),
      five_xy: five(one_1_x, f_m2(x, y)),
      five_yx: five(one_1_y, f_m2(y, x)),
      six: two(x, m_1) + two(y, m_1),
      seven_x: two(x, m_1) + five(one_1_x, f_m2(x, y)),
      seven_y: two(y, m_1) + five(one_1_y, f_m2(y, x)),
      eight_x: two(x, m_1) - five(one_1_x, f_m2(x, y)),
      eight_y: two(y, m_1) - five(one_1_y, f_m2(y, x)),
      nine_x: one_x[4] * 2,
      nine_y: one_y[4] * 2,
      letterMatches: letterMatchesByIndex(x, y),
    })
  }

  function formatResult(value: any): string {
    if (Array.isArray(value)) {
      return value.map(v => formatResult(v)).join(', ')
    }
    if (typeof value === 'number' && !isNaN(value)) {
      return value.toFixed(3)
    }
    return String(value)
  }

  return (
    <div className="container mx-auto p-4 pt-[104px]">
      <h1 className="text-3xl font-bold mb-4">Калькулятор теории информации</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <Input
          placeholder="Система X"
          value={x}
          onChange={(e) => setX(e.target.value)}
          className="w-full"
        />
        <Input
          placeholder="Система Y"
          value={y}
          onChange={(e) => setY(e.target.value)}
          className="w-full"
        />
      </div>
      <Button onClick={calculate} className="mb-4">Calculate</Button>
      
      {Object.keys(results).length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Основные</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Символы</TableHead>
                    <TableHead>Кол-во X</TableHead>
                    <TableHead>Вероятности X</TableHead>
                    <TableHead>Кол-во Y</TableHead>
                    <TableHead>Внроятности Y</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {m_1.map((letter, index) => (
                    <TableRow key={letter}>
                      <TableCell>{letter}</TableCell>
                      <TableCell>{results.one_x[index]}</TableCell>
                      <TableCell>{formatResult(results.one_1_x[index])}</TableCell>
                      <TableCell>{results.one_y[index]}</TableCell>
                      <TableCell>{formatResult(results.one_1_y[index])}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Дополнительные</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Расчеты</TableHead>
                    <TableHead>Результат</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>H(x)</TableCell>
                    <TableCell>{formatResult(results.two_x)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>H(y)</TableCell>
                    <TableCell>{formatResult(results.two_y)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>H(x/y)</TableCell>
                    <TableCell>{formatResult(results.five_xy)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>H(y/x)</TableCell>
                    <TableCell>{formatResult(results.five_yx)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>H(x, y)</TableCell>
                    <TableCell>{formatResult(results.six)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>H(x, y) (alt 1)</TableCell>
                    <TableCell>{formatResult(results.seven_x)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>H(x, y) (alt 2)</TableCell>
                    <TableCell>{formatResult(results.seven_y)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>H(x &lt;-&gt; y) (1)</TableCell>
                    <TableCell>{formatResult(results.eight_x)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>H(x &lt;-&gt; y) (2)</TableCell>
                    <TableCell>{formatResult(results.eight_y)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Q(x)</TableCell>
                    <TableCell>{formatResult(results.nine_x)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Q(y)</TableCell>
                    <TableCell>{formatResult(results.nine_y)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Условные и совместные вероятности</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="conditional_y_x">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="conditional_y_x">P(X|Y)</TabsTrigger>
                  <TabsTrigger value="conditional_x_y">P(Y|X)</TabsTrigger>
                  <TabsTrigger value="joint_x_y">P(X,Y)</TabsTrigger>
                  <TabsTrigger value="joint_y_x">P(Y,X)</TabsTrigger>
                </TabsList>
                <TabsContent value="conditional_y_x">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Y\X</TableHead>
                        {m_1.map((letter) => (
                          <TableHead key={letter}>{letter}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {m_1.map((letter, i) => (
                        <TableRow key={letter}>
                          <TableCell>{letter}</TableCell>
                          {results.for_4_y && results.for_4_y[i] ? 
                            results.for_4_y[i].map((prob: number, j: number) => (
                              <TableCell key={j}>{formatResult(prob)}</TableCell>
                            )) : 
                            m_1.map((_, j) => <TableCell key={j}>-</TableCell>)
                          }
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="conditional_x_y">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>X\Y</TableHead>
                        {m_1.map((letter) => (
                          <TableHead key={letter}>{letter}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {m_1.map((letter, i) => (
                        <TableRow key={letter}><TableCell>{letter}</TableCell>
                          {results.for_4_x && results.for_4_x[i] ? 
                            results.for_4_x[i].map((prob: number, j: number) => (
                              <TableCell key={j}>{formatResult(prob)}</TableCell>
                            )) : 
                            m_1.map((_, j) => <TableCell key={j}>-</TableCell>)
                          }
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="joint_x_y">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>X\Y</TableHead>
                        {m_1.map((letter) => (
                          <TableHead key={letter}>{letter}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {m_1.map((letter, i) => (
                        <TableRow key={letter}>
                          <TableCell>{letter}</TableCell>
                          {results.th_xy && results.th_xy[i] ? 
                            results.th_xy[i].map((count: number, j: number) => (
                              <TableCell key={j}>{formatResult(count / (x.length + y.length))}</TableCell>
                            )) : 
                            m_1.map((_, j) => <TableCell key={j}>-</TableCell>)
                          }
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                <TabsContent value="joint_y_x">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Y\X</TableHead>
                        {m_1.map((letter) => (
                          <TableHead key={letter}>{letter}</TableHead>
                        ))}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {m_1.map((letter, i) => (
                        <TableRow key={letter}>
                          <TableCell>{letter}</TableCell>
                          {results.th_yx && results.th_yx[i] ? 
                            results.th_yx[i].map((count: number, j: number) => (
                              <TableCell key={j}>{formatResult(count / (x.length + y.length))}</TableCell>
                            )) : 
                            m_1.map((_, j) => <TableCell key={j}>-</TableCell>)
                          }
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

        </div>
      )}
    </div>
  )
}

