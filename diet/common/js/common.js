$(function() {
    $('[data-body="button"]').on('click', function() {
        // 性別
        if ($('input[name="gender"]:checked').val() == 'male') {
            var gender = 5 ;
        } else {
            var gender = -161 ;
        }
        var age = $('[data-body="age"]').val(); //　年齢
        var height = $('[data-body="height"]').val(); //　身長
        var weight = $('[data-body="weight"]').val(); //　体重
        var bodyFat = $('[data-body="body-fat"]').val(); //　体脂肪率
        var fat = weight * (bodyFat * 0.01); //　体脂肪
        var leanBody = weight - fat; //　除脂肪体重
        var base = 10 * leanBody + 6.25 * height -5 * age + gender; //　基礎代謝

        //　アクティブ度
        if ($('input[name="active"]:checked').val() == 'low') {
            var active = base * 1.2 ;
        } else if($('input[name="active"]:checked').val() == 'middle') {
            var active = base * 1.55 ;
        } else {
            var active = base * 1.725 ;
        }

        var kcal = Math.floor(active * 0.8); //

        var eatProtein = (leanBody * 2); //
        var total = kcal - eatProtein * 4; //
        var low = total * 0.1; //
        var all = total - low; //

        console.log(gender);
        console.log(age);
        console.log(height);
        console.log(weight);
        console.log(bodyFat);
        console.log(fat);
        console.log(leanBody);
        console.log(base);
        console.log(active);
        console.log(kcal);
        console.log(eatProtein);
        console.log(total);
        console.log(low);
        console.log(all);

        $('[data-body="lean-body"]').text(leanBody);
        $('[data-body="base"]').text(base);
        $('[data-body="kcal"]').text(kcal);
        $('[data-body="protein"]').text(eatProtein);
        $('[data-body="fat"]').text(Math.floor(low / 9));
        $('[data-body="carbo"]').text(Math.floor(all / 4));
    });
});