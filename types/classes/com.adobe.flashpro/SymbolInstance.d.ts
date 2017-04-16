/// <reference path="../../packages/com.adobe.flashpro/references.d.ts"/>

declare namespace Adobe {
	namespace Flashpro {
		/**
		 * Symbol Instance is a sub class of Instance representing a 
		 * symbol in the frame. In addition to all the Instance object 
		 * properties, the following properties are available:
		 */
		class SymbolInstance extends Adobe.Flashpro.Instance {
			/**
			 * Equivalent to the Name field in the Accessibility Panel. 
			 * Screen readers identify objects by reading the name aloud. 
			 * This property is not available to graphic symbols.
			 * @type {string}
			 */
			public accName: string;
			/**
			 * String representing the ActionScript, this value returns 
			 * undefined on a graphic
			 * @type {string}
			 */
			public actionScript: string;
			/**
			 * The matte color when "Opaque" is selected. This is a string 
			 * in hexadecimal #rrggbb format or an integer containg the 
			 * value.
			 * @type {string}
			 */
			public backgroundColor: string;
			/**
			 * "none", "cache", "export" 
			 * set the display type for a symbol instance.
			 * @type {string}
			 */
			public bitmapRenderMode: string;
			/**
			 * Valid blend modes are: normal, layer, darken, multiply, 
			 * lighten, screen, overlay, hardlight, add, subtract, 
			 * difference, invert, alpha, and erase.
			 * @type {string}
			 */
			public blendMode: string;
			/**
			 * This only applies to buttons, on other types of symbols it 
			 * will be ignored. Acceptable values are: "button", "menu"
			 * @type {string}
			 */
			public buttonTracking: string;
			/**
			 * set the cacheAsBitmap to true (Use runtime bitmap caching in 
			 * the PI).true or false.
			 * @type {boolean}
			 */
			public cacheAsBitmap: boolean;
			/**
			 * Part of the color transformation for the instance. The same 
			 * as using the Color > Advanced setting in the Instance PI and 
			 * adjusting the controls on the right of the dialog. This 
			 * either reduces or increases the tint and alpha values by a 
			 * constant amount. This value is added to the current value. 
			 * Most useful if used in conjunctin with colorAlphaPercent() 
			 * Values allowed -255 to 255.
			 * @type {number}
			 */
			public colorAlphaAmount: number;
			/**
			 * Part of the color transformation for the instance. The same 
			 * as using the Color > Advanced setting in the Instance PI.  
			 * This is the same as using the controls on the left of the 
			 * dialog. This reduces the tint and alpha values by a 
			 * specified percentage. The current values are multiplied by 
			 * this percentage. Values allowed -100 to 100.
			 * @type {number}
			 */
			public colorAlphaPercent: number;
			/**
			 * Part of the color transformation for the instance. The same 
			 * as using the Color > Advanced setting in the Instance PI.  
			 * Values allowed -255 to 255.
			 * @type {number}
			 */
			public colorBlueAmount: number;
			/**
			 * Part of the color transformation for the instance. The same 
			 * as using the Color > Advanced setting in the Instance PI.  
			 * Values allowed -100 to 100.
			 * @type {number}
			 * @readonly
			 */
			public readonly colorBluePercent: number;
			/**
			 * Part of the color transformation for the instance. The same 
			 * as using the Color : Advanced setting in the Instance PI.  
			 * Values allowed -255 to 255.
			 * @type {number}
			 */
			public colorGreenAmount: number;
			/**
			 * Part of the color transformation for the instance. The same 
			 * as using the Color : Advanced setting in the Instance PI.  
			 * Values allowed -100 to 100.
			 * @type {number}
			 */
			public colorGreenPercent: number;
			/**
			 * The color mode as identified in the symbol properties 
			 * dialog.  Legal values are "none", "brightness", "tint", 
			 * "alpha", "advanced".
			 * @type {string}
			 */
			public colorMode: string;
			/**
			 * Part of the color transformation for the instance. The same 
			 * as using the Color > Advanced setting in the Instance PI.  
			 * Values allowed -255 to 255.
			 * @type {number}
			 */
			public colorRedAmount: number;
			/**
			 * Part of the color transformation for the instance. The same 
			 * as using the Color > Advanced setting in the Instance PI.  
			 * Values allowed -100 to 100.
			 * @type {number}
			 */
			public colorRedPercent: number;
			/**
			 * Equivalent to the Description field on the Accessibility 
			 * Panel. The description is read by the screen reader. This 
			 * property is not available to graphic symbol.
			 * @type {string}
			 */
			public description: string;
			/**
			 * Filters is an array of Filter objects.
			 * The properties of Filter object in the filters array can be 
			 * read but cannot be written directly by accessing the filters 
			 * array. 
			 * To set the properties of the filter objects in the filters 
			 * array, first retrieve the array, set the properties, set it 
			 * back to the filters array.
			 * @type {any[]}
			 */
			public filters: any[];
			/**
			 * This only applies to graphics, on other types of symbols 
			 * this value will be undefined. This specifies the first frame 
			 * to display
			 * @type {number}
			 */
			public firstFrame: number;
			/**
			 * Enable/disable the children of the object to be accessible. 
			 * This is equivalent to the inverse logic of "Make Child 
			 * Objects Accessible" setting in the Accessibility Panel. 
			 * 
			 * forceSimple == true --> Make Child Object Accessible is 
			 * unchecked.
			 *  
			 * forceSimple == false --> Make Child Object Accessible is 
			 * checked.
			 * 
			 * This property is not available to graphic AND button object.
			 * @type {boolean}
			 */
			public forceSimple: boolean;
			/**
			 * Indicates if the symbol instance contains a 3D matrix.
			 * @type {boolean}
			 * @readonly
			 */
			public readonly is3D: boolean;
			/**
			 * This only applies to graphics, on other types of symbols 
			 * this value will be undefined. Acceptable values are: "loop", 
			 * "play once", "single frame"
			 * @type {string}
			 */
			public loop: string;
			/**
			 * This is equivalent to the Shortcut field on the 
			 * Accessibility Panel. 
			 * The shortcut is read by the screen readers. 
			 * This property is not available to graphic symbol.
			 * @type {string}
			 */
			public shortcut: string;
			/**
			 * Enable/disable the object to be accessible. This is 
			 * equivalent to the inverse logic of "Make Object Accessible" 
			 * setting in the Accessibility Panel.
			 * 
			 * silent == true --> Make Object Accessible is unchecked.
			 * 
			 * silent == false --> Make Object Accessible is checked.
			 * 
			 * This property is not available to graphic object.
			 * @type {boolean}
			 */
			public silent: boolean;
			/**
			 * "button", "movie clip", "graphic"
			 * @type {string}
			 */
			public symbolType: string;
			/**
			 * This is equivalent to the Tab Index field on the 
			 * Accessibility Panel. UI available only in Flash MX 
			 * Professional 2004.
			 * 
			 * Creates a tab order in which objects are accessed when the 
			 * user presses the tab key.
			 * This property is not available to graphic symbols.
			 * @type {number}
			 */
			public tabIndex: number;
			/**
			 * set the display format. If false use 32 bit with Alpha. 
			 * If true use the background color.
			 * @type {boolean}
			 */
			public useBackgroundColor: boolean;
			/**
			 * Sets visible property as exposed in the UI via the visible 
			 * checkbox in the DISPLAY section of the Properties Inspector 
			 * for symbols.
			 * @type {boolean}
			 */
			public visible: boolean;
		}
	}
}