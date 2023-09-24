# Projeto Mobile

Este é o código do aplicativo gerado para os entregadores das encomendas. 

Tecnologias utilizadas:

- React-Native;

# Criando o projeto do zero com o `Expo`:

```bash
expo init front-mobile -t expo-template-blank-typescript --npm
```

Após a instalação, remover a pasta `.git` de `front-mobile`.

```bash
rm -rf .git
```

# Pré-requisitos e dependências

Estão descritos no package.json.

Na raíz do projeto é necessário um arquivo .env com a variável EXPO_PUBLIC_API_URL. Nela, atribuir o IP do serviço de entregas de restaurante. Os detalhes do serviço podem ser encontrados neste [link (sds-deliver-backend)](https://github.com/Lubrum/dsdeliver-sds-backend).

# Instalação (com expo e npm)

```bash 
npm install --global expo-cli
```

# Execução

```bash
npm start
```

Para utilizar o Expo Go no Android, [seguir este tutorial](https://docs.expo.dev/get-started/create-a-new-app/).

# Gerando um .apk para o Android

Pré-requisito: ter o npm instalado na máquina ou container e um projeto React Native Android ou iOS.

1- Instalar o eas:

```bash
sudo npm install -g eas-cli
```

2- Ter uma conta de usuário criada no [expo](https://expo.dev/).

3- Executar o comando para o build do apk. É necessário o arquivo eas.json, [seguir este tutorial oficial do expo para mais detalhes](https://docs.expo.dev/build/eas-json/):

```bash
eas build -p android --profile preview
```

4- Fazer o Download do .apk no dispositivo de teste, através do acesso ao link do Expo para o apk, e instalar o .apk. [Instruções podem ser obtidas aqui, no site do Expo](https://docs.expo.dev/build-reference/apk/).
