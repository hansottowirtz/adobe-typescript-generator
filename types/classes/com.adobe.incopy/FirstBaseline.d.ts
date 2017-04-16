/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FirstBaseline extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The tallest character in the font falls below the top inset 
			 * of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly ASCENT_OFFSET: Adobe.Incopy.FirstBaseline;
			/**
			 * Alias for ASCENT_OFFSET. The tallest character in the font 
			 * falls below the top inset of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly ascentOffset: Adobe.Incopy.FirstBaseline;
			/**
			 * The tops of upper case letters touch the top inset of the 
			 * object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly CAP_HEIGHT: Adobe.Incopy.FirstBaseline;
			/**
			 * Alias for CAP_HEIGHT. The tops of upper case letters touch 
			 * the top inset of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly capHeight: Adobe.Incopy.FirstBaseline;
			/**
			 * The text em box height is the distance between the baseline 
			 * of the text and the top inset of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly EMBOX_HEIGHT: Adobe.Incopy.FirstBaseline;
			/**
			 * Alias for EMBOX_HEIGHT. The text em box height is the 
			 * distance between the baseline of the text and the top inset 
			 * of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly emboxHeight: Adobe.Incopy.FirstBaseline;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the value specified for minimum first baseline offset 
			 * as the distance between the baseline of the text and the top 
			 * inset of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly FIXED_HEIGHT: Adobe.Incopy.FirstBaseline;
			/**
			 * Alias for FIXED_HEIGHT. Uses the value specified for minimum 
			 * first baseline offset as the distance between the baseline 
			 * of the text and the top inset of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly fixedHeight: Adobe.Incopy.FirstBaseline;
			/**
			 * The text leading value defines the distance between the 
			 * baseline of the text and the top inset of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly LEADING_OFFSET: Adobe.Incopy.FirstBaseline;
			/**
			 * Alias for LEADING_OFFSET. The text leading value defines the 
			 * distance between the baseline of the text and the top inset 
			 * of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly leadingOffset: Adobe.Incopy.FirstBaseline;
			/**
			 * The tops of lower case letters touch the top inset of the 
			 * object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly X_HEIGHT: Adobe.Incopy.FirstBaseline;
			/**
			 * Alias for X_HEIGHT. The tops of lower case letters touch the 
			 * top inset of the object.
			 * @type {Adobe.Incopy.FirstBaseline}
			 * @readonly
			 */
			public static readonly xHeight: Adobe.Incopy.FirstBaseline;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}