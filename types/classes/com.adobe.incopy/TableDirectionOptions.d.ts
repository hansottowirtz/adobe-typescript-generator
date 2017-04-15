/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TableDirectionOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Set left to right table direction */
			public static readonly LEFT_TO_RIGHT_DIRECTION: Adobe.Incopy.TableDirectionOptions;
			/**
			 * Alias for LEFT_TO_RIGHT_DIRECTION. Set left to right table 
			 * direction
			 */
			public static readonly leftToRightDirection: Adobe.Incopy.TableDirectionOptions;
			/** Set right to left table direction */
			public static readonly RIGHT_TO_LEFT_DIRECTION: Adobe.Incopy.TableDirectionOptions;
			/**
			 * Alias for RIGHT_TO_LEFT_DIRECTION. Set right to left table 
			 * direction
			 */
			public static readonly rightToLeftDirection: Adobe.Incopy.TableDirectionOptions;
			/** Constructor */
			public constructor();
		}
	}
}