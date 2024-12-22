"use client";

import { useState } from "react";

export default function HomePage() {
  const [x, setX] = useState("bbcabaabacabbacbbaccbbaccbbddadadad");
  const [y, setY] = useState("ccabacabbacbbaccabcabbaccbbddadadab");

  const m_1 = [...new Set((y + x).split(""))].sort();

  const one = (a, m) => {
    const r_1 = m.map((l) => a.split('').filter((ch) => ch === l).length);
    const r = r_1.reduce((acc, val) => acc + val, 0);
    r_1.push(r);
    return r_1;
  };

  const one_1 = (a, m) => {
    const v_1 = one(a, m);
    const r_1_2 = v_1.slice(0, -1).map((num) => Math.floor((num / v_1[4]) * 1000) / 1000);
    const r = r_1_2.reduce((acc, val) => acc + val, 0);
    r_1_2.push(Math.ceil(r));
    return r_1_2;
  };

  const two = (a, m) => {
    const mf = one_1(a, m);
    let P = 0;
    for (let i = 0; i < mf.length - 1; i++) {
      if (mf[i] > 0) {
        P += mf[i] * Math.log2(mf[i]);
      }
    }
    return Math.ceil(Math.abs(P) * 1000) / 1000;
  };

  const th = (a_1, b_1, m, v) => {
    const r = [0, 0, 0, 0];
    for (let i = 0; i < Math.min(a_1.length, b_1.length); i++) {
      if (a_1[i] === m[v] && b_1[i] === m[0]) r[0]++;
      else if (a_1[i] === m[v] && b_1[i] === m[1]) r[1]++;
      else if (a_1[i] === m[v] && b_1[i] === m[2]) r[2]++;
      else if (a_1[i] === m[v] && b_1[i] === m[3]) r[3]++;
    }
    return r;
  };

  const for_4 = (a_mk, b_m) => {
    const r = [];
    for (let n = 0; n < 4; n++) {
      const p = b_m[n] / a_mk[n];
      r.push(Math.ceil(p * 1000) / 1000);
    }
    return r;
  };

  const sum_N = (a, b, c, d) => {
    const r = [0, 0, 0, 0];
    for (let i = 0; i < 4; i++) {
      r[i] = Math.max(1, Math.floor(a[i] + b[i] + c[i] + d[i]));
    }
    return r;
  };

  const f_m1 = (mf) => {
    let P = 0;
    for (let i = 0; i < 4; i++) {
      if (mf[i] > 0) {
        P += mf[i] * Math.log2(mf[i]);
      }
    }
    return Math.floor(Math.abs(P) * 1000) / 1000;
  };

  const f_m2 = (a, b) => {
    return [0, 1, 2, 3].map((i) => f_m1(for_4(one(a, m_1), th(a, b, m_1, i))));
  };

  const five = (a_F, b_M) => {
    let P = 0;
    for (let i = 0; i < 4; i++) {
      P += a_F[i] * b_M[i];
    }
    return Math.ceil(Math.abs(P) * 10) / 10;
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Калькулятор</h1>

      <div>
        <h2>Результаты:</h2>
        <pre>{JSON.stringify({ X: one(x, m_1), Y: one(y, m_1) }, null, 2)}</pre>
        <pre>{JSON.stringify({ "Вер. X": one_1(x, m_1), "Вер. Y": one_1(y, m_1) }, null, 2)}</pre>
        <pre>{JSON.stringify({ "H(x)": two(x, m_1), "H(y)": two(y, m_1) }, null, 2)}</pre>
        <pre>
          {JSON.stringify(
            {
              Xy: {
                a: th(x, y, m_1, 0),
                b: th(x, y, m_1, 1),
                c: th(x, y, m_1, 2),
                d: th(x, y, m_1, 3),
              },
              Yx: {
                a: th(y, x, m_1, 0),
                b: th(y, x, m_1, 1),
                c: th(y, x, m_1, 2),
                d: th(y, x, m_1, 3),
              },
            },
            null,
            2
          )}
        </pre>
        <pre>
          {JSON.stringify(
            {
              "For X": [
                for_4(one(x, m_1), th(x, y, m_1, 0)),
                for_4(one(x, m_1), th(x, y, m_1, 1)),
                for_4(one(x, m_1), th(x, y, m_1, 2)),
                for_4(one(x, m_1), th(x, y, m_1, 3)),
              ],
              "Sum N (X)": sum_N(
                for_4(one(x, m_1), th(x, y, m_1, 0)),
                for_4(one(x, m_1), th(x, y, m_1, 1)),
                for_4(one(x, m_1), th(x, y, m_1, 2)),
                for_4(one(x, m_1), th(x, y, m_1, 3))
              ),
              "For Y": [
                for_4(one(y, m_1), th(y, x, m_1, 0)),
                for_4(one(y, m_1), th(y, x, m_1, 1)),
                for_4(one(y, m_1), th(y, x, m_1, 2)),
                for_4(one(y, m_1), th(y, x, m_1, 3)),
              ],
              "Sum N (Y)": sum_N(
                for_4(one(y, m_1), th(y, x, m_1, 0)),
                for_4(one(y, m_1), th(y, x, m_1, 1)),
                for_4(one(y, m_1), th(y, x, m_1, 2)),
                for_4(one(y, m_1), th(y, x, m_1, 3))
              ),
              "H(x/y)": five(one_1(x, m_1), f_m2(x, y)),
              "H(y/x)": five(one_1(y, m_1), f_m2(y, x)),
            },
            null,
            2
          )}
        </pre>
      </div>
    </div>
  );
}
