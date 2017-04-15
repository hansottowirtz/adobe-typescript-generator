/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TableDirectionOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Set left to right table direction */
			public static readonly LEFT_TO_RIGHT_DIRECTION: Adobe.Indesign.TableDirectionOptions;
			/**
			 * Alias for LEFT_TO_RIGHT_DIRECTION. Set left to right table 
			 * direction
			 */
			public static readonly leftToRightDirection: Adobe.Indesign.TableDirectionOptions;
			/** Set right to left table direction */
			public static readonly RIGHT_TO_LEFT_DIRECTION: Adobe.Indesign.TableDirectionOptions;
			/**
			 * Alias for RIGHT_TO_LEFT_DIRECTION. Set right to left table 
			 * direction
			 */
			public static readonly rightToLeftDirection: Adobe.Indesign.TableDirectionOptions;
			/** Constructor */
			public constructor();
		}
	}
}