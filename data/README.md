# Atualizar a publicação do LinkedIn

A seção "Acompanhe o que publicamos" na home mostra a última publicação da Guima
no LinkedIn. Ela é alimentada por um único arquivo: **`linkedin.json`**, nesta
mesma pasta.

Atualizar é editar esse arquivo. Não precisa mexer em código nem rodar nada.

---

## Como trocar o post do mês

### 1. Copie o endereço da publicação

No LinkedIn, abra a publicação, clique nos três pontinhos (`···`) e escolha
**"Copiar link para a publicação"**.

### 2. Descubra o identificador (URN)

O link copiado tem esta cara:

```
https://www.linkedin.com/posts/guima-proesc-educaaexaetopublica-share-7510331546978013184-dkX-/
                                                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```

O número comprido depois de `share-` é o que interessa. O URN é esse número
precedido de `urn:li:share:`:

```
urn:li:share:7510331546978013184
```

> Se o link vier encurtado (`https://lnkd.in/...`), cole-o na barra do navegador
> e aperte Enter. Ele abre no endereço completo, e aí o número aparece.
>
> Caminho alternativo: nos três pontinhos da publicação existe a opção
> **"Incorporar esta publicação"**, que entrega um trecho de código com o mesmo
> URN dentro. Serve se o link não tiver o número.

### 3. Edite o `linkedin.json`

```json
{
  "profileUrl": "https://www.linkedin.com/company/guima-representa%C3%A7%C3%A3o-e-distribui%C3%A7%C3%A3o/",
  "post": {
    "urn": "urn:li:share:7510331546978013184",
    "url": "https://www.linkedin.com/posts/guima-proesc-...",
    "title": "Proesc Gov: 5 entregas que transformam a gestão do AEE nas redes escolares",
    "date": "2026-09-28"
  }
}
```

Troque quatro campos:

| Campo   | O que é                                        | Exemplo                        |
| ------- | ---------------------------------------------- | ------------------------------ |
| `urn`   | O identificador do passo 2                     | `urn:li:share:7510331546978013184` |
| `url`   | O link completo da publicação                  | `https://www.linkedin.com/posts/...` |
| `title` | Título ou primeira frase — vira o rótulo de acessibilidade do quadro | `Proesc Gov: 5 entregas...` |
| `date`  | Data da publicação, **sempre no formato `AAAA-MM-DD`** | `2026-09-28`                   |

`profileUrl` é o perfil da empresa e só muda se o endereço do LinkedIn mudar.

### 4. Salve

Editando pelo GitHub direto no navegador: **Commit changes**. A Vercel publica
sozinha em um ou dois minutos. Não precisa avisar ninguém.

---

## Se o mês passar sem publicação

Deixe o `urn` vazio:

```json
"urn": "",
```

O quadro do LinkedIn some e a seção continua no ar, só com o convite e o botão
para o perfil. **Isso é melhor do que deixar um post antigo**: uma "última
publicação" de seis meses atrás passa a impressão de que a empresa parou.

---

## O que o LinkedIn não deixa incorporar

Vale conferir antes de escolher o post do mês:

- **Só publicações públicas.** Se estiver restrita a conexões, não aparece.
- **Carrosséis e posts com várias fotos não funcionam.**
- **Republicações (reposts) não funcionam.**
- **Apagar a publicação quebra o quadro.** Se o post sair do ar, troque o `urn`
  aqui também.

Se o post do mês cair num desses casos, escolha outro ou deixe o `urn` vazio.

---

## Por que isso é manual

O LinkedIn não oferece um jeito automático acessível. Não existe RSS de página
há anos, e ler as publicações por API exige a **Community Management API**, que
pede organização registrada, e-mail corporativo verificado, formulário de
acesso, um vídeo demonstrando a integração e uma reunião de aprovação técnica
com o time deles. Para um quadro de "último post", não compensa.

Também descartamos os widgets pagos (Elfsight, EmbedSocial e afins): custam
mensalidade e injetam script de rastreamento de terceiros — ruim num site que
tem seção de compliance e canal de ouvidoria.

Com uma publicação por mês, editar um arquivo é mais barato e mais confiável.

---

## Notas para quem mexe no código

- Componente: **`components/LinkedInPost.jsx`**, renderizado por
  `components/Team.jsx`, logo abaixo de `WhoWeAre`.
- É **Server Component** (sem `"use client"`): não tem estado nem interação,
  então nada dele vai para o bundle do cliente.
- O `iframe` usa `loading="lazy"` — o LinkedIn só carrega quando o usuário se
  aproxima da seção.
- A data é formatada à mão (array de meses) em vez de `toLocaleDateString`,
  porque o componente roda no servidor e o locale do ambiente de build não é
  garantido. Assim o HTML sai igual sempre.
- O campo `date` serve só para exibição. Se for apagado, a linha "Última
  publicação em..." some e o resto continua funcionando.
- ⚠️ O trecho que o LinkedIn entrega em "Incorporar esta publicação" é **HTML
  puro**, com `frameborder="0"` e `allowfullscreen` em minúsculas. Colar aquilo
  direto no JSX reproduz o erro `Invalid DOM property` que já existiu neste
  projeto. Em React é `allowFullScreen`, `className` em vez de `class`, e a
  borda vem do CSS.

### Curiosidade útil

O campo `date` foi obtido sem abrir o LinkedIn: o ID da publicação carrega o
horário de criação nos bits altos. Em Python:

```python
import datetime
pid = 7510331546978013184
ms = pid >> 22
print(datetime.datetime.fromtimestamp(ms / 1000, datetime.timezone.utc))
# 2026-09-28 13:36 UTC
```
