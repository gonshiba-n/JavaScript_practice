puts "グー、チョキ、パーを打ってね"

# プレイヤーに入力してもらう
input_hand = gets.chomp
# プレイヤーの手を数値化するための変数
player_hand = 0
# ランダムに０〜２を代入しておく
cp_hand = rand(0..2)
# 数値を配列のインデックスで呼び出し出目を表示
jyanken_hands = ["グー", "チョキ", "パー"]

# ユーザーの入力が適切か判定の後、変数に数値を足す
def user_input_juge(hand, after_hand)
    unless hand == "グー" || hand == "チョキ" || hand == "パー"
        puts "グー、チョキ、パーのどれかを入力してね！"
    else
        if hand == "グー"
            after_hand + 0
        elsif hand == "チョキ"
            after_hand + 1
        elsif hand == "パー"
            after_hand + 2
        end
    end
end

# 入力が適正なのか判定し、適正ならばグーを０、チョキを１、パーを２にして代入
player_hand_after_juge =  user_input_juge(input_hand, player_hand)

# 勝敗判定&出力
def game_juge(cp, player,hand)
    plyer_output = puts "あなたの手は#{hand[player]}"
    cp_output = puts "相手の手は#{hand[cp]}"
    if cp == player
        puts "あいこです"
        plyer_output
        cp_output
    elsif (player == 0 && cp == 1) || (player == 1 && cp == 2) || (player == 3 && cp == 0)
        puts "あなたの勝ちです"
        plyer_output
        cp_output
    else
        puts "あなたの負けです"
        plyer_output
        cp_output
    end
end

game_juge(cp_hand, player_hand, jyanken_hands)