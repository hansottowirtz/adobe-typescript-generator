/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ListType extends Adobe.Csawlib.CSEnumBase {
			/** Bullet list. */
			public static readonly BULLET_LIST: Adobe.Indesign.ListType;
			/** Alias for BULLET_LIST. Bullet list. */
			public static readonly bulletList: Adobe.Indesign.ListType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No list. */
			public static readonly NO_LIST: Adobe.Indesign.ListType;
			/** Alias for NO_LIST. No list. */
			public static readonly noList: Adobe.Indesign.ListType;
			/** Numbered list. */
			public static readonly NUMBERED_LIST: Adobe.Indesign.ListType;
			/** Alias for NUMBERED_LIST. Numbered list. */
			public static readonly numberedList: Adobe.Indesign.ListType;
			/** Constructor */
			public constructor();
		}
	}
}