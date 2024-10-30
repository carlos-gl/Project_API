# Projeto de Testes de API com Cypress

## Descrição

Este projeto utiliza o cypress para realizar testes em uma API pública de exemplo.

## Configuração do Projeto

### Pré-requisitos

Certifique-se de que você tem instalado em sua máquina:

Node.js (Versão 20 ou superior)

### Clonando o Repositório

```
git clone https://github.com/carlos-gl/API_Project.git
```
Utilize sua IDE de preferência para executar o projeto (Sugetão: Visual Studio Code).

### Executando os Testes:
```
npx cypress run
```

#### O mesmo também é executado através do github actions, está configurado para rodar a esteira a cada commit, e após execução gera o artefato com os resultados.

### Resultados dos Testes
Os resultados dos testes são gerados em formato JSON e HTML, na pasta /reports
 - Endpoint /Products 
![image](https://github.com/user-attachments/assets/91b7c9e3-8bee-4eea-b58d-21e09070bd29)
- Endpoint /Users
![image](https://github.com/user-attachments/assets/e7067149-6ecc-40a7-9968-b334811e7157)
- Endpoint /Cart
![image](https://github.com/user-attachments/assets/537b9389-c472-4305-9cba-d275e567bfe9)


