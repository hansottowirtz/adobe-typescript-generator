/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The color picker to use. */
		class ColorPicker extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The Adobe Color Picker. */
			public static readonly ADOBE: Adobe.Photoshop.ColorPicker;
			/** The built-in Apple color picker. */
			public static readonly APPLE: Adobe.Photoshop.ColorPicker;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** An installed plug-in color picker. */
			public static readonly PLUGIN: Adobe.Photoshop.ColorPicker;
			/** The built-in Windows color picker. */
			public static readonly WINDOWS: Adobe.Photoshop.ColorPicker;
			/** Constructor */
			public constructor();
		}
	}
}