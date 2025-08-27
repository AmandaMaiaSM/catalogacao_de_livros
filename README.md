
#  Catalogação de Livros

## 1. Objetivo do Projeto
Criar um site para catalogar livros que você deseja ler e que já leu, permitindo **adicionar**, **editar** e **visualizar** informações sobre cada livro.


## 2. 🛠 Funcionalidades Principais

### Funcionalidades Iniciais (MVP)
- **Adicionar livro à lista**
- **Classificar** livro como “Quero ler” ou “Já li”
- **Editar** informações do livro (título, autor, gênero, status)
- **Remover** livro
- **Buscar** livros pelo título ou autor
- **Filtros** por status (“Quero ler” ou “Já li”)

### Funcionalidades Futuras (Opcional)
-  Avaliar livros com estrelas ou notas
- Adicionar resenhas ou comentários
- Inserir capa do livro
- Conectar à **API do Google Books** para preencher dados automaticamente
- Criar gráficos (quantos livros por mês, gêneros mais lidos)



## 3. Estrutura das Informações (Modelo de Dados)

Cada livro será representado por um objeto com o seguinte formato:

```json
{
  "id": 1,
  "titulo": "O Hobbit",
  "autor": "J.R.R. Tolkien",
  "genero": "Fantasia",
  "status": "Quero ler", 
  "nota": 5,
  "resenha": "Uma aventura épica e encantadora.",
  "capa": "url_da_imagem"
}
````



## 4.  Tecnologias

**Frontend:**

* HTML5
* CSS3
* JavaScript (ou React para mais dinamismo)

**Backend (opcional em versões futuras):**

* Node.js + Express (para salvar dados em servidor)

**Banco de dados:**

* **Primeira versão:** LocalStorage do navegador
* **Versão avançada:** MongoDB ou PostgreSQL

---
## 5.  Telas iniciais (Resultado)

<img width="1894" height="1089" alt="image" src="https://github.com/user-attachments/assets/0d1606ab-e3c5-46db-a717-09fd4b0aab53" />
<img width="1912" height="1096" alt="image" src="https://github.com/user-attachments/assets/f750bbdc-0de4-49a9-962f-bcbbd7aed420" />
<img width="1919" height="1025" alt="image" src="https://github.com/user-attachments/assets/d87ed38f-5063-48f5-80bf-311091af2558" />
<img width="1881" height="1025" alt="image" src="https://github.com/user-attachments/assets/5c63eb75-12c8-4e27-94db-417f07de5d5a" />
<img width="1919" height="1089" alt="image" src="https://github.com/user-attachments/assets/8326cdb7-5471-440d-976d-8578360660de" />
<img width="1919" height="1091" alt="image" src="https://github.com/user-attachments/assets/969223d6-920f-4f36-8aa2-e31f8685cf82" />
<img width="1919" height="1087" alt="image" src="https://github.com/user-attachments/assets/4d78f9a5-15ba-49b7-8734-5a32b650b74e" />
<img width="1919" height="1086" alt="image" src="https://github.com/user-attachments/assets/3dad93cf-890d-477d-93f8-80caa613d9a0" />






