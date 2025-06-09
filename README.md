# Clima Local - App React Native com Expo

![Clima Local](./assets/explo.jpg)

---

## Sobre

Clima Local é um aplicativo mobile feito em React Native com Expo que exibe a previsão do tempo atual e para os próximos dias com visual retrô, inspirado no estilo clássico.  
A API de clima está hospedada no backend separado (Render).

---

## Funcionalidades Principais

- Detecta a localização atual do usuário (com permissão)
- Exibe dados meteorológicos atuais detalhados (temperatura, umidade, vento, nascer e pôr do sol)
- Armazena a última localização para uso offline inicial
- Botão para atualizar manualmente as informações do clima

---

## Como Funciona (Resumo)

1. O app solicita permissão para acessar localização.  
2. Se permitido, busca coordenadas geográficas do dispositivo.  
3. Salva localmente a última localização para evitar pedir permissão toda vez.  
4. Faz requisição ao backend, que consulta a API de clima real usando a API_KEY armazenada no backend (nunca no app).  
5. Exibe os dados recebidos com visual estilizado.

---

## Estrutura e Principais Arquivos

### Componentes

- **RetroCard**  
  Exibe a previsão atual e detalhes como temperatura, sensação térmica, umidade, vento, pressão e horários de nascer/pôr do sol, com estilo retrô.

- **ForecastItem**  
  Mostra previsão diária com data, ícone do tempo e temperatura para cada dia subsequente (usado em FlatList horizontal).

### Utilitários

- **api.js**  
  Contém funções para buscar dados climáticos via fetch direto ao backend. Exemplo: `fetchWeatherByCoords(lat, lon)`, `fetchWeatherByCity(city)`.  
  *Importante:* Não armazena nem expõe nenhuma chave da API do serviço de clima, tudo fica no backend.

- **storage.js**  
  Utiliza AsyncStorage para salvar e recuperar a última localização usada (`saveLocation` e `getLocation`).

### Tela Principal

- **HomeScreen**  
  Controla fluxo principal:  
  - Gerencia estados de loading, erro e dados climáticos  
  - Solicita permissão e busca localização  
  - Busca dados via API  
  - Exibe `RetroCard` e lista horizontal com `ForecastItem`  
  - Permite atualizar dados manualmente

### Arquivo de Configuração

- **app.config.js** e **app.json**  
  Configurações do Expo, incluindo nome do app, ícones, splash screen, orientação, versões e plataformas.

---

## Como Rodar o Projeto

### Requisitos

- Node.js e npm/yarn instalados
- Expo CLI (instalado globalmente ou usar via npx)
- Emulador Android/iOS ou dispositivo físico com Expo Go

### Passos

1. Clone o projeto (ou copie os arquivos).  
2. Rode `npm install` ou `yarn` para instalar dependências.  
3. Execute `npm start` ou `yarn start` para iniciar o Expo.  
4. Conecte seu dispositivo via QR code ou rode em emulador.  
5. **Lembre:** A API_KEY está no backend remoto!  
   - O backend deve estar rodando e acessível para que o app funcione corretamente.  
   - O backend tem as rotas `/weather` para cidade e `/weather/coords` para coordenadas.  

---

## Tecnologias Utilizadas

- React Native (via Expo SDK 53)  
- Expo Location para acesso à localização do dispositivo  
- AsyncStorage para persistência local  
- Fetch API para comunicação com backend  
- JavaScript moderno (React Hooks)

---

## Explicação Detalhada das Funções e Fluxo

### `fetchWeatherByCoords(lat, lon)`

Faz uma requisição HTTP GET para o backend, enviando latitude e longitude.  
Retorna o JSON com dados meteorológicos.  
A função **não** sabe da API_KEY, pois essa fica no backend.

### `saveLocation(loc)` e `getLocation()`

Salvam e recuperam no AsyncStorage o objeto com latitude e longitude da última localização usada.  
Isso evita pedir permissão toda vez e acelera carregamento.

### HomeScreen

- **loadWeather**:  
  Função assíncrona que:  
  - Verifica AsyncStorage para última localização  
  - Se não houver, pede permissão de localização e busca coordenadas atuais  
  - Salva localização no AsyncStorage  
  - Chama `fetchWeatherByCoords` para buscar dados climáticos no backend  
  - Atualiza estados de dados, loading e erro conforme resultados

- Renderiza:  
  - Indicador de loading enquanto busca dados  
  - Mensagem e botão para tentar novamente em caso de erro  
  - O componente `RetroCard` com os dados do clima atual  
  - Uma lista horizontal (`FlatList`) com os próximos dias usando `ForecastItem`  
  - Botão para atualizar os dados manualmente

---

## Considerações Importantes

- **Segurança:**  
  A chave da API de clima fica no backend, que deve ser mantido seguro e privado. O front-end só consome as rotas do backend.

- **Permissões:**  
  O app pede permissão para usar a localização. Se negada, o usuário verá erro e poderá tentar novamente.

- **Estilo visual:**  
  A aparência usa tema retrô simples com cores cinza e azul, bordas pretas, ícones do OpenWeather para clima, garantindo legibilidade e estilo nostálgico.

- **Limitações:**  
  O app depende do backend estar disponível e funcionando para buscar dados climáticos.

---

## Próximos Passos / Melhorias

- Adicionar busca manual por cidades no front-end  
- Melhorar tratamento de erros e UX  
- Adicionar temas claro/escuro  
- Otimizar layout para tablets e diferentes resoluções  
- Implementar cache local para dados do clima

---

## Contato

Para dúvidas ou sugestões, entre em contato!

---

**Obs:** Não armazene sua API key no front-end. Mantenha-a segura no backend.

---

## Licença

Projeto aberto para uso pessoal e estudos.

---

**Obrigado por usar Clima Local!** ☀️🌧️🌈
