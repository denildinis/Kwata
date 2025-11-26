# 📘 Regras de Negócio – Kwenda

---

## 🟦 1. Agendamento

### RN1 — Agendamento sem cadastro
O utilizador não precisa criar conta para realizar um agendamento.

### RN2 — Formulário de agendamento simples
O utilizador deve preencher apenas:  
- Nome  
- Banco  
- Agência  
- Serviço desejado  
- Contacto (opcional)

### RN3 — Sem seleção de horário
O sistema não apresenta horários.  
O utilizador apenas escolhe o serviço, e a agência segue o horário comercial padrão (ex.: 08h–15h).

### RN4 — Geração de senha
Após enviar o formulário, o sistema gera uma senha única de atendimento para o utilizador.

### RN5 — Confirmação do agendamento
A confirmação do agendamento deve ser apresentada imediatamente na tela do utilizador.

---

## 🟩 2. Serviços

### RN6 — Lista fixa de serviços
O sistema deve fornecer uma lista pré-definida de serviços bancários (ex.: abertura de conta, atualização de dados, levantamento de cartão, etc.).

### RN7 — Serviços por agência
Cada agência pode disponibilizar ou ocultar serviços específicos.

### RN8 — Organização por dia
Cada agendamento é válido apenas para o dia em que foi realizado.  
Não existe agendamento futuro.

---

## 🟧 3. Notificações

### RN9 — Notificações essenciais
O sistema envia apenas notificações essenciais:
- Confirmação do agendamento  
- Envio da senha  

### RN10 — Tipos de notificação
Notificações podem ser enviadas:
- *Dentro da própria aplicação* (local)  
- *Por e-mail*, caso o utilizador disponibilize contacto

### RN11 — Sem notificações avançadas
O sistema não utiliza push notifications complexas, SMS ou integrações externas (MVP).

---

## 🟥 4. Autenticação e Acesso

### RN12 — Acesso restrito ao painel interno
Apenas funcionários autenticados podem aceder ao painel de controlo da agência.

### RN13 — Login obrigatório para funcionários
Funcionários devem utilizar credenciais válidas para aceder às listas de atendimento e gestão interna.

### RN14 — Utilizadores externos não têm login
O utilizador comum não tem conta e não pode autenticar-se.

---

## 🟪 5. Gestão Interna (Funcionários)

### RN15 — Painel interno de atendimentos
Funcionários podem visualizar:
- Lista de atendimentos do dia  
- Serviços solicitados  
- Senhas emitidas  

### RN16 — Controlo de chamamento
O funcionário pode:
- Chamar a próxima senha  
- Marcar uma senha como “atendida”  
- Marcar como “não compareceu”

### RN17 — Agências podem bloquear agendamentos
A agência pode suspender temporariamente novos agendamentos.  
Quando isso acontecer, o utilizador deve ver a mensagem:  
*"Agendamentos indisponíveis no momento."*

---

## 🟫 6. Registo e Armazenamento de Dados

### RN18 — Armazenamento local
Todos os agendamentos são guardados no banco de dados local (MySQL).

### RN19 — Dados mínimos
Cada registo deve conter:
- Nome do utilizador  
- Banco  
- Agência  
- Serviço  
- Data  
- Senha gerada  
- Contacto (opcional)

### RN20 — Sem dados sensíveis desnecessários
O sistema só armazena informações essenciais ao agendamento.

---

## 🟨 7. Limitações do MVP

### RN21 — Sem controlo de tempo de atendimento
O sistema não calcula duração do atendimento nem estima horário.

### RN22 — Foco no essencial
Funcionalidades avançadas (fila em tempo real, estimativa de espera, app mobile, QR Code, etc.) ficam para versões futuras.

---
