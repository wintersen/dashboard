<template>
  <div class="messagingcontainer">
    <h2>Communications</h2>
    <div class="tabrow">
      <div class="tab tab-active">
        Incoming
      </div>
      <div class="tab">
        Outgoing
      </div>
    </div>
    <div class="messages">
      <div v-for="(email, i) in this.$store.state.messages" :key="i" class="email">
        <div class="emailheader" :class="{'important':email.important}">
          <h3 class="title">{{email.title}}</h3>
          <span class="from">{{email.from}}</span>
          <v-icon large>mdi-chevron-down</v-icon>
        </div>
        <div class="emailbody">
          <p>{{email.body}}</p>
          <div class="iconholder">
            <v-icon>mdi-reply</v-icon>
            <v-icon>mdi-trash-can</v-icon>
          </div>
        </div>
      </div>
    </div>
    <v-btn block outlined color="primary">Compose Message</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Messaging',
  data: () => ({

  })
}
</script>

<style lang="scss" scoped>
.messagingcontainer{
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.tabrow{
  display: flex;
  flex-direction: row;

  .tab{
    flex: 1;
    height: 50px;
    background-color: #B0BEC5;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-radius: 10px 10px 0 0;
    border: solid 1px black;
    
  }

  .tab-active{
    background-color: #ECEFF1;
    border-bottom: none;
  }
}

.messages{
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  border: solid 1px black;
  border-radius:  0 0 10px 10px;
  background-color: #ECEFF1;
  border-top: none;
  overflow-x: auto;

  .email{
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    .emailheader{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-radius: 10px 10px 0 0;
      background-color: white;
      padding: 5px 10px 5px 10px;

      .title{
        flex: 2;
      }
      .from{
        flex:1;
      }
    }
    .important{
      background-color: red;
      color: white;
    }
    
    .emailbody{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      background-color: white;
      border-radius: 0 0 10px 10px;
      padding: 10px;

      p{
        margin: 0;
      }

      .iconholder{
        display: flex;
        flex-direction: column;
      }
    }
  }
}

</style>