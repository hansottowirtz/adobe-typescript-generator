/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrintPosition extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Translate to the bottom center of media. */
			public static readonly TRANSLATEBOTTOM: PrintPosition;
			/** Translate to the bottom left of media. */
			public static readonly TRANSLATEBOTTOMLEFT: PrintPosition;
			/** Translate to the bottom right of media. */
			public static readonly TRANSLATEBOTTOMRIGHT: PrintPosition;
			/** Translate to the center of media. */
			public static readonly TRANSLATECENTER: PrintPosition;
			/** Translate to the left center of media. */
			public static readonly TRANSLATELEFT: PrintPosition;
			/** Translate to the right center of media. */
			public static readonly TRANSLATERIGHT: PrintPosition;
			/** Translate to the top center of media. */
			public static readonly TRANSLATETOP: PrintPosition;
			/** Translate to the top left of media. */
			public static readonly TRANSLATETOPLEFT: PrintPosition;
			/** Translate to the top right of media. */
			public static readonly TRANSLATETOPRIGHT: PrintPosition;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}