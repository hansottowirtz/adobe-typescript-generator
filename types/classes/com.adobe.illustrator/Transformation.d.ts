/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class Transformation extends IllustratorEnumBase {
			/** Transform relative to the object's bottom edge. */
			public static readonly BOTTOM: Transformation;
			/** Transform relative to the object's bottom left corner. */
			public static readonly BOTTOMLEFT: Transformation;
			/** Transform relative to the object's bottom right corner. */
			public static readonly BOTTOMRIGHT: Transformation;
			/** Transform relative to the object's center. */
			public static readonly CENTER: Transformation;
			/** Transform relative to the illustration's page origin. */
			public static readonly DOCUMENTORIGIN: Transformation;
			public static readonly enumCache: CSEnumSharedCache;
			/** Transform relative to the object's left edge. */
			public static readonly LEFT: Transformation;
			/** Transform relative to the object's right edge. */
			public static readonly RIGHT: Transformation;
			/** Transform relative to the object's top edge. */
			public static readonly TOP: Transformation;
			/** Transform relative to the object's top left corner. */
			public static readonly TOPLEFT: Transformation;
			/** Transform relative to the object's top right corner. */
			public static readonly TOPRIGHT: Transformation;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}