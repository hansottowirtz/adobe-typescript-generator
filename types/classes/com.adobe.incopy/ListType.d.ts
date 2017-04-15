/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ListType extends Adobe.Csawlib.CSEnumBase {
			/** Bullet list. */
			public static readonly BULLET_LIST: Adobe.Incopy.ListType;
			/** Alias for BULLET_LIST. Bullet list. */
			public static readonly bulletList: Adobe.Incopy.ListType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** No list. */
			public static readonly NO_LIST: Adobe.Incopy.ListType;
			/** Alias for NO_LIST. No list. */
			public static readonly noList: Adobe.Incopy.ListType;
			/** Numbered list. */
			public static readonly NUMBERED_LIST: Adobe.Incopy.ListType;
			/** Alias for NUMBERED_LIST. Numbered list. */
			public static readonly numberedList: Adobe.Incopy.ListType;
			/** Constructor */
			public constructor();
		}
	}
}