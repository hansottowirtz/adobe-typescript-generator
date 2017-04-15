/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The strikethrough style. */
		class StrikeThruType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * (For vertical type) The strikethrough is through the em box.
			 */
			public static readonly STRIKEBOX: Adobe.Photoshop.StrikeThruType;
			/**
			 * (For vertical type) The strikethrough is through the height 
			 * of the text.
			 */
			public static readonly STRIKEHEIGHT: Adobe.Photoshop.StrikeThruType;
			/** No strikethrough. */
			public static readonly STRIKEOFF: Adobe.Photoshop.StrikeThruType;
			/** Constructor */
			public constructor();
		}
	}
}