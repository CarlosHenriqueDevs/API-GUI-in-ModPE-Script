var version = 1.0;
var author = "Carlos follow me on twitter @CarlosIdeScript";

var MAX_VALUE = -1;
var MIN_VALUE = -2;

function Screen(width, height, orientation)
{
   this.buttons = new java.util.ArrayList();
   this.image_views = [3];
   this.width = width;
   this.height = height;

   this.addButton = function(button)
   {
      this.buttons.add(button.newInstance());
   };
   
   this.addImageView = function(imageView)
   {
      for (var v = 0; v < this.image_views.lenght; v++)
      {
	 if (this.image_views[i] == null)
	    this.image_views[i] = imageView;
      }
   };
   
   this.show = function(x, y)
   {
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      
      ctx.runOnUiThread(new java.lang.Runnable()
      {
	 run : function()
	 {
	    var window = new android.widget.PopupWindow();
	    window.setWidth(width);
	    window.setHeight(height);
	    
	    var layout = new android.widget.LinearLayout(ctx);
	    layout.setOrientation(android.widget.LinearLayout.VERTICAL);
	    
//	    for (var  i = 0; i < buttons.size(); i++)
//	    {
//	       layout.addView(buttons.get(i));
//	    }
	    
	    window.setContentView(layout);
	    window.showAtLocation(ctx.getWindow().getDecorView(), android.view.View.Gravity.TOP | android.view.View.Gravity.LEFT, 0, 0);
	 }
      });
   };
}

function Button(text, width, height, id)
{
   this.width = width;
   this.height = height;
   this.text = text;
   this.id = id;

   this.newInstance = function()
   {
      var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();
      var view_button = new android.widget.Button(ctx);
      view_button.setText(this.text);

      switch (this.width)
      {
	 case MAX_VALUE:
	    view_button.setWidth(android.widget.LinearLayout.LayoutParams.MATCH_PARENT);
	    break;
	 case MIN_VALUE:
	    view_button.setWidth(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
	    break;
      }

      switch (this.height)
      {
	 case MAX_VALUE:
	    view_button.setHeight(android.widget.LinearLayout.LayoutParams.MATCH_PARENT);
	    break;
	 case MIN_VALUE:
	    view_button.setHeight(android.widget.LinearLayout.LayoutParams.WRAP_CONTENT);
	    break;
      }

      return view_button;
   };
}

function ImageView(width, height, texturePackImageDirectory)
{
   this.width = width;
   this.height = height;
   this.image = getBitmapImage(texturePackImageDirectory);

   this.newInstance = function()
   {
      var iv = new android.widget.ImageView(com.mojang.minecraftpe.MainActivity.currentMainActivity.get());
      android.graphics.Bitmap.createScaledBitmap(this.image, this.width, this.height, false);
      iv.setImageBitmap(this.image);

      return iv;
   };
}

function getBitmapImage(src)
{
   var image = android.graphics.BitmapFactory.decodeStream(ModPE.openInputStreamFromTexturePack(src));

   return image;
}

function getDisplayWidth()
{
   var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

   var display = ctx.getWindowManager().getDefaultDisplay();
   var coords = new android.graphics.Point();
   display.getSize(coords);

   return coords.x;
}

function getDisplayHeight()
{
   var ctx = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

   var display = ctx.getWindowManager().getDefaultDisplay();
   var coords = new android.graphics.Point();
   display.getSize(coords);
   
   return coords.y;
}

function Vector2(x, y)
{
   this.x = x;
   this.y = y;
}

function getCenter(outVector)
{
   outVector.x = getDisplayWidth() / 2;
   outVector.y = getDisplayHeight() / 2;
}

function getCenterTop(outVector)
{
   outVector.x = getDisplayWidth() / 2;
   outVector.y = 0;
}

function getCenterBottom(outVector)
{
   outVector.x = getDisplayWidth() / 2;
   outVector.y = getDisplayHeight();
}

function getCenterRight(outVector)
{
   outVector.x = 0;
   outVector.y = getDisplayHeight() / 2;
}

function newLevel()
{
   var tela = new Screen(200, 200, 0);
   var bt = new Button("Hello", 200, 200, 0);
   
   tela.addButton(bt);
   
   tela.show(300, 300);
}
