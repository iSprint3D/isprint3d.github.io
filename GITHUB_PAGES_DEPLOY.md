# 🚀 Guia de Deploy - GitHub Pages

Este guia explica como hospedar o site Studio iSprint permanentemente no GitHub Pages.

---

## 📋 Pré-requisitos

- Conta no GitHub
- Git instalado no seu computador
- Node.js e pnpm instalados (para testes locais)

---

## 🔧 Passo 1: Criar Repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em **"New"** para criar um novo repositório
3. **Nome do repositório:** `studio-isprint`
4. **Descrição:** Studio iSprint - Criação Técnica Digital
5. **Visibilidade:** Public (necessário para GitHub Pages)
6. Clique em **"Create repository"**

---

## 📁 Passo 2: Preparar o Repositório Local

### 2.1 Inicializar Git (se ainda não estiver)

```bash
cd studio-isprint-updated
git init
git config user.name "Seu Nome"
git config user.email "seu@email.com"
```

### 2.2 Adicionar Remote

```bash
git remote add origin https://github.com/seu-usuario/studio-isprint.git
```

Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

### 2.3 Criar Branch Principal

```bash
git branch -M main
```

---

## 📤 Passo 3: Fazer Commit e Push

```bash
# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Studio iSprint website with animations"

# Fazer push para GitHub
git push -u origin main
```

---

## ⚙️ Passo 4: Configurar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá para **Settings** → **Pages**
3. Em **Build and deployment**:
   - **Source:** Selecione "GitHub Actions"
4. Clique em **Save**

---

## 🔄 Passo 5: Executar GitHub Actions

O workflow de deploy será executado automaticamente quando você fizer push para `main`.

### Para verificar o status:

1. Vá para a aba **Actions** do seu repositório
2. Procure por "Deploy to GitHub Pages"
3. Aguarde a conclusão (geralmente leva 1-2 minutos)

---

## 🌐 Passo 6: Acessar o Site

Após o deploy bem-sucedido, seu site estará disponível em:

```
https://seu-usuario.github.io/studio-isprint/
```

Substitua `seu-usuario` pelo seu nome de usuário do GitHub.

---

## 📝 Estrutura do Workflow

O arquivo `.github/workflows/deploy.yml` faz o seguinte:

1. **Build:** Compila o projeto React com Vite
2. **Otimização:** Minifica o código para produção
3. **Upload:** Envia os arquivos para GitHub Pages
4. **Deploy:** Publica o site automaticamente

---

## 🔄 Atualizações Futuras

Sempre que você fizer alterações:

```bash
# Fazer alterações nos arquivos...

# Commit e push
git add .
git commit -m "Descrição das mudanças"
git push origin main
```

O site será atualizado automaticamente em poucos minutos.

---

## 🎯 Variáveis de Ambiente

A variável `GITHUB_PAGES=true` é definida automaticamente no workflow, o que configura o `base` correto no `vite.config.ts`.

Se você precisar testar localmente com a configuração do GitHub Pages:

```bash
GITHUB_PAGES=true pnpm run build
```

---

## 🐛 Troubleshooting

### Site não aparece após deploy

1. Verifique se o repositório é **público**
2. Aguarde 5-10 minutos (GitHub Pages pode levar tempo)
3. Limpe o cache do navegador (Ctrl+Shift+Delete)
4. Verifique a aba **Actions** para erros de build

### Erro no build

1. Verifique os logs na aba **Actions**
2. Certifique-se de que `pnpm-lock.yaml` está no repositório
3. Execute localmente: `pnpm install && pnpm run build`

### Imagens não carregam

1. Verifique se as URLs das imagens estão corretas
2. Use caminhos relativos para assets locais
3. Para imagens externas, use URLs completas (https://...)

---

## 📊 Monitoramento

### Verificar Deployments

1. Vá para **Deployments** no seu repositório
2. Veja histórico de todos os deploys
3. Reverta para versão anterior se necessário

### Logs de Build

1. Vá para **Actions**
2. Clique no workflow mais recente
3. Veja os logs detalhados de cada etapa

---

## 🔐 Domínio Customizado (Opcional)

Se você tiver um domínio próprio:

1. Vá para **Settings** → **Pages**
2. Em **Custom domain**, insira seu domínio (ex: studio-isprint.com)
3. Configure os registros DNS do seu domínio:
   - **A records:** Aponte para os IPs do GitHub Pages
   - **CNAME:** Aponte para `seu-usuario.github.io`

---

## 📚 Recursos Úteis

- [Documentação GitHub Pages](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#github-pages)

---

## ✅ Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Git configurado localmente
- [ ] Código feito push para main
- [ ] GitHub Pages ativado
- [ ] Workflow de deploy executado
- [ ] Site acessível em `https://seu-usuario.github.io/studio-isprint/`
- [ ] Todas as imagens e animações funcionando
- [ ] Formulário de contato respondendo

---

**Versão:** 1.0  
**Data:** Março 2026  
**Status:** ✅ Pronto para Deploy
