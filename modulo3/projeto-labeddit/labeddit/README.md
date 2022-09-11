# Labeddit

- Dessa vez, vocês irão implementar uma rede social! Já fizemos vários protótipos de redes sociais, mas nenhuma delas realmente funcional. A ideia agora é fazer uma rede real, com cadastro, login, posts, likes e comentários.

## Informações gerais

- O projeto irá durar 5 dias e será realizado individualmente
- Não existe uma ordem sugerida de implementação.
- Dessa vez, a API será **a mesma para todo mundo**. Portanto, todos os usuários, posts e comentários criados aparecerão pra todos os grupos, atenção para o que vocês vão escrever!
- A disposição dos elementos nos wireframes é só uma sugestão. Vocês podem fazer o layout e organização diferentes do sugerido. Podem usar o [Reddit](https://reddit.com) e as implementações de redes sociais que já fizemos como inspiração.
- Foquem em entregar um projeto **funcional**, que cumpra com as funcionalidades descritas em cada tela. Tomem cuidado com o tempo e com coisas extras.
- Antes de irem para os desafios, gastem um tempo se preocupando com a **experiência do usuário**. Pensem em como tornar a experiência mais fluida e agradável. Se quiserem indicações de como melhorar nesse ponto, venham falar conosco no canal de dúvidas!

## Página de Login
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/73d4dbed-fe87-4e28-8e5c-bdefbbc5ca10/Untitled.svg)
    
    A página de login possui dois campos de texto: email e senha. O comportamento será o mesmo da página de login feita no projeto LabeX. Ao fazer o login, o usuário deverá ser redirecionado para a página de feed.
    
    A página possui também um botão "Cadastrar", que leva o usuário para a página de cadastro.
    
 ## Página de Cadastro
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/31ccad62-fa3b-4c04-bce5-42a669ca19ce/Untitled.svg)
    
    A página de cadastro possui 3 campos: nome de usuário, email e senha. O endpoint de cadastro retornará as mesmas informações do endpoint de login. Portanto, após cadastrar, o usuário deverá ser redirecionado para a página de feed, já estando logado (ou seja, com o token salvo no LocalStorage).
    
  ## Página de Feed (Lista de Posts)
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e6a7e256-54c6-4fa7-86c2-9844d74a65fb/Untitled.svg)
    
    A página de feed deverá mostrar todos os posts, além de um formulário para a criação de post. 
    
    Essa página só pode ser acessada por um usuário logado. Caso o usuário não esteja logado, deverá ser redirecionado para a página de login.
    
    O formulário possui apenas o campo de texto. Cada post mostrará o nome de usuário que postou, o texto do post, o número de votos (positivo ou negativo) e o número de comentários. Caso o usuário tenha votado positiva ou negativamente, isso deverá estar indicado. Todas essa informações serão fornecidas pela API.
    
    Quando o usuário clicar em um post, ele deverá ser redirecionado para a página do respectivo post. 
    
    Quando um usuário clicar em votar (positiva ou negativamente), uma requisição deverá ser feita indicando a "direção" do voto. 
    
    **Um voto positivo é indicado com o número `1`.** 
    
    **Um voto negativo é indicado com o número `-1`.** 
    
    **Para remover um voto, bata no endpoint de deletar o voto.**
    
  ## Página do Post
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/83b7dfb3-f890-4be0-830b-05251f23e164/Untitled.svg)
    
    A página de um post mostrará o mesmo card de post da página de feed, com o usuário, texto, curtidas e número de comentários. 
    
    Essa página só pode ser acessada por um usuário logado. Caso o usuário não esteja logado, deverá ser redirecionado para a página de login.
    
    Abaixo, terá um formulário para criação de comentários e os cards de comentários. A estrutura é muito similar à do post, mas comentários não possuem outros comentários dentro deles. A lógica de votos é a mesma do post.
    
    ## Documentação:
    
    https://documenter.getpostman.com/view/9731983/U16eu7nT
