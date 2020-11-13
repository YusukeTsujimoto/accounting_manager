<template>
  <div class="about">
    <h1>売掛一覧</h1>
    <select name="customers">
      <option value="HAS">HAS</option>
      <option value="SGシステム">SGシステム</option>
      <option value="TDI">TDI</option>
      <option value="アンクラージェ">アンクラージェ</option>
      <option value="クオンテックス">クオンテックス</option>
      <option value="シーシーエス">シーシーエス</option>
      <option value="天公">天公</option>
      <option value="Minori">Minori</option>
      <option value="キャリアビート">キャリアビート</option>
    </select>
    <select name="kind">
      <option value="見積書">見積書</option>
      <option value="請求書">請求書</option>
    </select>
    <table>
      <tr>
        <th>作成日</th>
        <th>見積番号</th>
        <th>顧客名</th>
        <th>契約開始日</th>
        <th>契約終了日</th>
        <th>支払い条件</th>
        <th>作業場所</th>
        <th>作業実施責任者</th>
        <th>見積額</th>
        <th>業務内容</th>
      </tr>
      <tr>
        <td>9999年99月99日</td>
        <td>999999-99</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
        <td>xxxxxxxxxx</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default class AccountsReceivableList extends Vue {}
</script>
