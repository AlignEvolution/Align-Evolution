# Guia de Configuração do Supabase

## Passo 1: Executar o Script SQL

1. Acesse o **Supabase Dashboard**: https://app.supabase.com
2. Selecione seu projeto
3. Vá para **SQL Editor** (no menu esquerdo)
4. Clique em **"+ New Query"**
5. **Copie TODO o conteúdo** do arquivo `scripts/01-init-schema.sql`
6. **Cole** no editor SQL
7. Clique em **"Run"** (ou pressione Ctrl+Enter)

## ⚠️ IMPORTANTE

- Certifique-se de copiar **APENAS** o arquivo `.sql` 
- NÃO copie arquivos `.ts` ou `.tsx`
- O script deve começar com `-- Create tables for the dental case management system`

## Passo 2: Verificar as Tabelas

Após executar o script:
1. Vá para **Table Editor** 
2. Você deve ver as seguintes tabelas:
   - `users`
   - `dentists`
   - `cases`
   - `case_files`
   - `timeline_events`
   - `messages`
   - `clinical_prescriptions`
   - `refinements`
   - `refinement_files`

## Passo 3: Próximo Passo

Após confirmar que todas as tabelas foram criadas, me avise para:
- Migrar os componentes para usar Supabase
- Criar as funções de CRUD
- Configurar Row Level Security (RLS)
