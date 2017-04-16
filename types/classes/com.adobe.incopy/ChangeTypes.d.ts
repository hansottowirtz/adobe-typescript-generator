/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ChangeTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Deleted text.
			 * @type {Adobe.Incopy.ChangeTypes}
			 * @readonly
			 */
			public static readonly DELETED_TEXT: Adobe.Incopy.ChangeTypes;
			/**
			 * Alias for DELETED_TEXT. Deleted text.
			 * @type {Adobe.Incopy.ChangeTypes}
			 * @readonly
			 */
			public static readonly deletedText: Adobe.Incopy.ChangeTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Added text.
			 * @type {Adobe.Incopy.ChangeTypes}
			 * @readonly
			 */
			public static readonly INSERTED_TEXT: Adobe.Incopy.ChangeTypes;
			/**
			 * Alias for INSERTED_TEXT. Added text.
			 * @type {Adobe.Incopy.ChangeTypes}
			 * @readonly
			 */
			public static readonly insertedText: Adobe.Incopy.ChangeTypes;
			/**
			 * Moved text.
			 * @type {Adobe.Incopy.ChangeTypes}
			 * @readonly
			 */
			public static readonly MOVED_TEXT: Adobe.Incopy.ChangeTypes;
			/**
			 * Alias for MOVED_TEXT. Moved text.
			 * @type {Adobe.Incopy.ChangeTypes}
			 * @readonly
			 */
			public static readonly movedText: Adobe.Incopy.ChangeTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}