# プロジェクトについて

このプロジェクトはVue.jsのrefとreactiveの動作について理解を深めるためのテストプロジェクトです。

# コードスタイル

- ESLintの指摘があったら修正する。

# 実装計画

型を表すためにTypeScriptを使って説明しますが実装はPure JavaScriptで行います。

## 主要なエンティティ

```typescript
type Meeting {
  // ID
  readonly id: number
  // タイトル
  readonly subject: string
  // ミーティング開始時刻
  readonly startTime: Date
}
```

## 使用するAPI

```typescript
interface MeetingService {
  fetchMeetings(): Promise<Meeting[]>
}
```

テストプロジェクトなので、この実装は実際にAPIを呼ぶのではなく、呼ばれてから0.5sec後にMeetingオブジェクトを5個含んだモックレスポンスを返す実装とします。

# コンポーネント

components以下に実装する。

## MeetingView.vue

props経由で渡されたMeetingオブジェクトひとつ分を表示する。

- subject
- startTime
- startTimeと現在時刻を比較した結果の（開始前）と（開始後）の表示

コンポーネント境界がわかりやすいようにborderをつける。

## MeetingList.vue

APIから取得したMeetingのリストの要素数だけMeetingViewコンポーネントを表示する。
30秒に１回、MeetingService.fetchMeetings()をコールして再描画する。

# View

vuews以下に実装する。

## Meeting.vue

MeetingListを表示する。
