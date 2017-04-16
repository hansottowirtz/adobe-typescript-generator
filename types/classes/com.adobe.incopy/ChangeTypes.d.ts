/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeTypes extends Adobe.Csawlib.CSEnumBase {
			/** Deleted text. */
			public static readonly DELETED_TEXT: Adobe.Incopy.ChangeTypes;
			/** Alias for DELETED_TEXT. Deleted text. */
			public static readonly deletedText: Adobe.Incopy.ChangeTypes;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Added text. */
			public static readonly INSERTED_TEXT: Adobe.Incopy.ChangeTypes;
			/** Alias for INSERTED_TEXT. Added text. */
			public static readonly insertedText: Adobe.Incopy.ChangeTypes;
			/** Moved text. */
			public static readonly MOVED_TEXT: Adobe.Incopy.ChangeTypes;
			/** Alias for MOVED_TEXT. Moved text. */
			public static readonly movedText: Adobe.Incopy.ChangeTypes;
			/** Constructor */
			public constructor();
		}
	}
}