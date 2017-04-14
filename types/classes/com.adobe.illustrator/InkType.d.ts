/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class InkType extends IllustratorEnumBase {
			/** Black color ink. */
			public static readonly BLACKINK: InkType;
			/** Custom color ink. */
			public static readonly CUSTOMINK: InkType;
			/** Cyan color ink. */
			public static readonly CYANINK: InkType;
			public static readonly enumCache: CSEnumSharedCache;
			/** Magenta color ink. */
			public static readonly MAGENTAINK: InkType;
			/** Yellow color ink. */
			public static readonly YELLOWINK: InkType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}