def on_up_pressed():
    mr_pac.set_velocity(0, -21)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

def on_left_pressed():
    mr_pac.set_velocity(-21, 0)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_right_pressed():
    mr_pac.set_velocity(21, 0)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_down_pressed():
    mr_pac.set_velocity(0, 21)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

mr_pac: Sprite = None
dot = sprites.create(img("""
        . 1 . 
            1 1 1 
            . 1 .
    """),
    SpriteKind.food)
mr_pac = sprites.create(img("""
        . . 6 6 6 6 6 6 6 . . 
            . 6 6 6 6 6 1 6 1 6 . 
            6 6 6 6 6 6 6 6 6 . . 
            6 6 6 6 6 6 6 . . . . 
            6 6 6 6 6 . . . . . . 
            6 6 6 6 . . . . . . . 
            6 6 6 6 . . . . . . . 
            6 6 6 6 6 6 . . . . . 
            6 6 6 6 6 6 6 6 6 . . 
            . 6 6 6 6 6 6 6 6 6 . 
            . . 6 6 6 6 6 6 6 . .
    """),
    SpriteKind.player)
mr_pac.set_flag(SpriteFlag.STAY_IN_SCREEN, True)

def on_forever():
    music.play_melody("C G F E C5 C5 C F ", 300)
    music.play_melody("C - G G F F E - ", 300)
forever(on_forever)
