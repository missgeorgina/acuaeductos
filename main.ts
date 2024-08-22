player.onChat("channel2-3", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(6, 7, -25),
    pos(6, 8, 24),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(5, 7, -25),
    pos(3, 7, 24),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(5, 8, -25),
    pos(3, 8, 24),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 7, -25),
    pos(2, 8, 24),
    FillOperation.Replace
    )
})
player.onChat("bath2", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, -43),
    pos(7, 1, -43),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, -43),
    pos(0, 1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(7, 0, -43),
    pos(7, 1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(7, 0, -40),
    pos(5, 1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 0, -40),
    pos(0, 1, -40),
    FillOperation.Replace
    )
})
player.onChat("channel2", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(5, 5, -40),
    pos(5, 6, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(4, 5, -40),
    pos(3, 5, 40),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(4, 6, -40),
    pos(3, 6, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 5, -40),
    pos(2, 6, 40),
    FillOperation.Replace
    )
})
player.onChat("under2", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 5, -40),
    pos(5, 0, 40),
    FillOperation.Replace
    )
    for (let index = 0; index <= 7; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            shapes.circle(
            AIR,
            pos(index2 + 2, 2, -35 + index * 10),
            2,
            Axis.X,
            ShapeOperation.Replace
            )
            blocks.fill(
            AIR,
            pos(2, 2, -37 + index * 10),
            pos(5, 0, -33 + index * 10),
            FillOperation.Replace
            )
        }
    }
})
player.onChat("under", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 5, -40),
    pos(5, 0, 40),
    FillOperation.Replace
    )
    player.say("для повітря відступили 3 блоки від 40 і ще 5 блоків від отриманої цифри")
    for (let index = 0; index <= 7; index++) {
        blocks.fill(
        AIR,
        pos(2, 4, -37 + index * 10),
        pos(5, 0, -33 + index * 10),
        FillOperation.Replace
        )
    }
})
player.onChat("channel2-2", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(5, 5, -20),
    pos(5, 6, 20),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(4, 5, -20),
    pos(3, 5, 20),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(4, 6, -20),
    pos(3, 6, 20),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 5, -20),
    pos(2, 6, 20),
    FillOperation.Replace
    )
})
player.onChat("ground-3", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 7, -25),
    pos(6, 0, 24),
    FillOperation.Replace
    )
})
player.onChat("bath1-3", function () {
    player.say("під 1й канал 4*8")
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(-1, 0, 45),
    pos(8, 1, 45),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(-1, 0, 45),
    pos(-1, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(8, 0, 45),
    pos(8, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(8, 0, 40),
    pos(5, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 0, 40),
    pos(-1, 1, 40),
    FillOperation.Replace
    )
})
player.onChat("channel", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(5, 0, -40),
    pos(5, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 0, -40),
    pos(2, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(4, 0, -40),
    pos(3, 0, 40),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(4, 0, -40),
    pos(3, 0, 40),
    FillOperation.Replace
    )
})
player.onChat("under-3", function () {
    player.say("для channel2")
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 5, -40),
    pos(5, 0, 40),
    FillOperation.Replace
    )
    player.say("для повітря збільшили заповнення")
    for (let index = 0; index <= 7; index++) {
        blocks.fill(
        AIR,
        pos(2, 4, -37 + index * 10),
        pos(5, 0, -31 + index * 10),
        FillOperation.Replace
        )
    }
})
player.onChat("bath1-2", function () {
    player.say("під 1й канал 3*6")
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, 44),
    pos(7, 1, 44),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, 44),
    pos(0, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(7, 0, 44),
    pos(7, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(7, 0, 40),
    pos(5, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 0, 40),
    pos(0, 1, 40),
    FillOperation.Replace
    )
})
player.onChat("bath2-3", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(-1, 0, -45),
    pos(8, 1, -45),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(-1, 0, -45),
    pos(-1, 1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(8, 0, -45),
    pos(8, 1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(8, 0, -40),
    pos(5, 1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 0, -40),
    pos(-1, 1, -40),
    FillOperation.Replace
    )
})
player.onChat("bath1", function () {
    player.say("під 1й канал 2*6")
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, 43),
    pos(7, 1, 43),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, 43),
    pos(0, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(7, 0, 43),
    pos(7, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(7, 0, 40),
    pos(5, 1, 40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 0, 40),
    pos(0, 1, 40),
    FillOperation.Replace
    )
})
player.onChat("bath2-2", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, -44),
    pos(7, 1, -44),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(0, 0, -44),
    pos(0, 1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(7, 0, -44),
    pos(7, 1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(7, 0, -40),
    pos(5, 1, -40),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 0, -40),
    pos(0, 1, -40),
    FillOperation.Replace
    )
})
player.onChat("channel-3", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(5, 0, -20),
    pos(5, 1, 0),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 0, -20),
    pos(2, 1, 0),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(4, 0, -20),
    pos(3, 0, 0),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(4, 0, -20),
    pos(3, 0, 0),
    FillOperation.Replace
    )
})
player.onChat("channel-2", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(5, 0, -20),
    pos(5, 1, 20),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 0, -20),
    pos(2, 1, 20),
    FillOperation.Replace
    )
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(4, 0, -20),
    pos(3, 0, 20),
    FillOperation.Replace
    )
    blocks.fill(
    WATER,
    pos(4, 0, -20),
    pos(3, 0, 20),
    FillOperation.Replace
    )
})
player.onChat("ground", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 5, -40),
    pos(5, 0, 40),
    FillOperation.Replace
    )
})
player.onChat("ground-2", function () {
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 5, -20),
    pos(5, 0, 20),
    FillOperation.Replace
    )
})
player.onChat("under-2", function () {
    player.say("для channel2")
    blocks.fill(
    CHISELED_STONE_BRICKS,
    pos(2, 5, -40),
    pos(5, 0, 40),
    FillOperation.Replace
    )
    player.say("для повітря зменшили заповнення")
    for (let index = 0; index <= 7; index++) {
        blocks.fill(
        AIR,
        pos(2, 4, -37 + index * 10),
        pos(5, 0, -34 + index * 10),
        FillOperation.Replace
        )
    }
})
