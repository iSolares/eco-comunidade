<template>
  <v-navigation-drawer
    color="#A2A644"
    :border="false"
    class="v-navigation-drawer fixed"
    v-model="isOpenMenu"
    temporary
  >
    <v-list-subheader class="mt-3 text-h6 text-white">
      <div class="justify-center align-center">
        <v-app-bar-nav-icon class="mt-0" @click="isOpenMenu = !isOpenMenu" />Eco
        Comunidade
      </div>
    </v-list-subheader>
    <v-list>
      <v-list-item class="text-start" @click="navigateTo('/Home')">
        Home
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/About')">
        Sobre nós
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Contact')">
        Contato
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Volunteer')">
        Voluntário
      </v-list-item>
      <v-list-item class="text-start" @click="navigateTo('/Map')">
        Maps
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-app-bar class="fixed" color="#A2A644">
    <v-app-bar-nav-icon @click="isOpenMenu = !isOpenMenu"></v-app-bar-nav-icon>
    <v-row class="justify-space-between">
      <v-col class="px-0">
        <p class="my-5 text-center text-h6">Eco Comunidade</p>
      </v-col>
      <v-col class="d-flex align-center pl-0 mr-3" cols="auto">
        <v-avatar size="50">
          <img cover width="50" src="/assets/imgs/Avatar3.jpeg" />
        </v-avatar>
      </v-col>
    </v-row>
  </v-app-bar>
  <v-row align="center" class="mt-16">
    <v-col cols="12">
      <v-row justify="center" class="my-auto" align="center">
        <v-col
          cols="auto"
          class="pt-0 d-flex flex-column"
          xs="12"
          sm="12"
          md="6"
          lg="6"
        >
          <v-btn
            @click="openGeneralVision = !openGeneralVision"
            prepend-icon="mdi-leaf"
            class="text-capitalize text-h5 mb-5"
            color="#A2A644"
            size="large"
            >Visão Geral</v-btn
          >
          <v-dialog v-model="openGeneralVision">
            <v-card
              color="#A2A644"
              class="mx-auto"
              prepend-icon="mdi-leaf"
              title="Visão Geral"
            >
              <v-card-text class="bg-surface-light pt-4">
                O Projeto Ecocomunidade é uma iniciativa inovadora que visa
                transformar a interação das comunidades locais com o meio
                ambiente, promovendo práticas sustentáveis e criando um modelo
                de convivência ecológica e consciente. Este projeto busca não
                apenas reduzir a pegada ecológica, mas também cultivar um
                espírito comunitário forte e resiliente, onde cada membro se
                torna um guardião do meio ambiente.
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-btn
            @click="openObjects = !openObjects"
            prepend-icon="mdi-leaf"
            class="text-capitalize mb-5 text-h5"
            color="#A2A644"
            size="large"
            >Objetivos</v-btn
          >
          <v-dialog v-model="openObjects">
            <v-card
              color="#A2A644"
              class="mx-auto mt-10"
              prepend-icon="mdi-leaf"
              title="Objetivos"
            >
              <v-card-text class="bg-surface-light pt-4">
                Promover a Sustentabilidade Ambiental: <br />
                O projeto tem como objetivo central incentivar práticas
                ecológicas que ajudem a preservar e restaurar o meio ambiente.
                Através de ações práticas e educativas, buscamos criar uma
                cultura de sustentabilidade que possa ser perpetuada por
                gerações.<br />
                Engajar a Comunidade Local: <br />
                A participação ativa da comunidade é crucial para o sucesso do
                projeto. A Ecocomunidade visa envolver todos os moradores,
                criando um senso de pertencimento e responsabilidade
                compartilhada na construção de um ambiente mais verde e
                saudável. <br />
                Educar e Capacitar: <br />
                Oferecer educação ambiental e capacitação é essencial. O projeto
                inclui workshops, palestras e programas de treinamento que
                equipam os participantes com o conhecimento e as habilidades
                necessárias para adotar práticas sustentáveis em seu dia a dia.
                <br />
                Reduzir a Pegada Ecológica: <br />
                Implementar medidas concretas para reduzir o desperdício, o
                consumo de energia e a utilização de recursos naturais, ajudando
                a comunidade a adotar um estilo de vida mais sustentável e
                consciente.
              </v-card-text>
            </v-card>
          </v-dialog>
          <v-btn
            @click="openMainTasks = !openMainTasks"
            prepend-icon="mdi-leaf"
            class="text-capitalize text-h5"
            color="#A2A644"
            size="large"
            >Atividades Principais</v-btn
          >
          <v-dialog v-model="openMainTasks">
            <v-card
              color="#A2A644"
              class="mt-1"
              prepend-icon="mdi-leaf"
              title="Atividades Principais"
            >
              <v-card-text class="bg-surface-light pt-4">
                Horta Comunitária: Descrição: A criação de uma horta comunitária
                é uma das principais iniciativas do projeto. Localizada em um
                espaço central da comunidade, a horta será um ponto de encontro
                para moradores, onde poderão cultivar alimentos frescos e
                orgânicos. Benefícios: Promove a segurança alimentar, reduz a
                necessidade de transporte de alimentos (diminuindo a pegada de
                carbono) e fortalece o vínculo comunitário. Atividades:
                Workshops sobre cultivo, manutenção de hortas, técnicas de
                permacultura e compostagem. Reciclagem e Compostagem: Descrição:
                Estabelecimento de programas de reciclagem e compostagem,
                visando a redução significativa dos resíduos sólidos enviados
                para aterros sanitários. Benefícios: Diminuição do impacto
                ambiental dos resíduos, produção de adubo orgânico para a horta
                comunitária e educação sobre a importância da reciclagem.
                Atividades: Criação de pontos de coleta seletiva, oficinas sobre
                técnicas de compostagem doméstica e industrial, campanhas de
                conscientização sobre a reciclagem. Energia Renovável:
                Descrição: Instalação de painéis solares em espaços comunitários
                como centros comunitários e escolas, promovendo o uso de energia
                limpa e renovável. Benefícios: Redução da dependência de fontes
                de energia não-renováveis, diminuição das emissões de gases de
                efeito estufa e economia nos custos de energia. Atividades:
                Sessões educativas sobre os benefícios da energia solar, visitas
                técnicas a instalações de energia renovável e workshops sobre a
                instalação e manutenção de painéis solares. Educação Ambiental:
                Descrição: Desenvolvimento de programas educativos focados na
                sustentabilidade, direcionados tanto a crianças quanto a
                adultos. Benefícios: Formação de uma geração consciente e
                responsável, capaz de tomar decisões informadas sobre o meio
                ambiente. Atividades: Aulas em escolas, palestras para a
                comunidade, distribuição de materiais educativos, e organização
                de eventos como feiras ambientais e dias de limpeza comunitária.
                Mobilidade Sustentável: Descrição: Incentivo ao uso de meios de
                transporte mais ecológicos, como bicicletas e transporte
                público, além da criação de ciclovias e rotas seguras para
                pedestres. Benefícios: Redução da emissão de poluentes, melhoria
                da saúde pública e diminuição do congestionamento urbano.
                Atividades: Programas de compartilhamento de bicicletas,
                campanhas de incentivo ao uso do transporte público, e workshops
                sobre manutenção de bicicletas. Parcerias e Recursos: Parcerias:
                Colaboração com ONGs ambientais, governos locais, escolas,
                universidades e empresas privadas para obter apoio técnico e
                financeiro. Recursos Necessários: Financiamento para
                infraestrutura (hortas, painéis solares, ciclovias), materiais
                educativos, ferramentas e insumos para cultivo, e recursos
                humanos (educadores, técnicos, voluntários).
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
  <footer>
    <p class="text-white">
      © 2024 EcoComunidade. Todos os direitos reservados.
    </p>
    <p>
      <a class="text-white" href="mailto:contato@ecocomunidade.org"
        >contato@ecocomunidade.org</a
      >
    </p>
  </footer>
</template>

<script setup>
const isOpenMenu = ref(false);
const openMainTasks = ref(false);
const openObjects = ref(false);
const openGeneralVision = ref(false);
</script>

<style scoped>
footer {
  text-align: center;
  padding: 20px;
  background-color: #a2a644;
}
</style>
