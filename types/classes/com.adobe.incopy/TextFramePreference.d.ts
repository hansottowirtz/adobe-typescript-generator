/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		/** Preference */
		class TextFramePreference extends Adobe.Incopy.Preference {
			/**
			 * The reference point for auto sizing of text frame. Reference 
			 * point is automatically adjusted to the suitable value 
			 * depending on the auto-sizing type value. As an example, top 
			 * left reference point becomes top center for height only 
			 * dimension
			 */
			public readonly autoSizingReferencePoint: Adobe.Incopy.AutoSizingReferenceEnum;
			/**
			 * Auto-sizing type of text frame. Based on type, reference 
			 * value is automatically adjusted. For example, for height 
			 * only type, top-left reference point becomes top-center. 
			 * Recommended to change auto-sizing type, after setting other 
			 * auto-sizing attributes
			 */
			public readonly autoSizingType: Adobe.Incopy.AutoSizingTypeEnum;
			/** A collection of event listeners. */
			public readonly eventListeners: Adobe.Incopy.EventListeners;
			/** A collection of events. */
			public readonly events: Adobe.Incopy.Events;
			/**
			 * The distance between the baseline of the text and the top 
			 * inset of the text frame or cell.
			 */
			public readonly firstBaselineOffset: Adobe.Incopy.FirstBaseline;
			/**
			 * If true, ignores text wrap settings for drawn or placed 
			 * objects in the text frame.
			 */
			public readonly ignoreWrap: boolean;
			/**
			 * The amount to offset text from the edges of the text frame, 
			 * specified either as a single value applied uniformly to all 
			 * sides of the text frame or as an array of 4 values in the 
			 * format [top inset, left inset, bottom inset, right inset]. 
			 * Can return: Unit (0 - 8640 points) or Array of 4 Units (0 - 
			 * 8640 points).
			 */
			public readonly insetSpacing: any;
			/**
			 * Returns true if the object specifier resolves to valid 
			 * objects.
			 */
			public readonly isValid: boolean;
			/**
			 * The minimum distance between the baseline of the text and 
			 * the top inset of the text frame or cell.
			 */
			public readonly minimumFirstBaselineOffset: any;
			/** The minimum height for auto-sizing of the text frame. */
			public readonly minimumHeightForAutoSizing: any;
			/** The minimum width for auto-sizing of the text frame. */
			public readonly minimumWidthForAutoSizing: any;
			/**
			 * The parent of the TextFramePreference (a Application, 
			 * Document or TextFrame).
			 */
			public readonly parent: any;
			/**
			 * A property that allows setting of several properties at the 
			 * same time.
			 */
			public properties: any;
			/**
			 * The number of columns in the text frame. Note: Depending on 
			 * the value of use fixed column width, the number of columns 
			 * can change automatically when the text frame size changes.
			 */
			public readonly textColumnCount: number;
			/** The column width of the columns in the text frame. */
			public readonly textColumnFixedWidth: any;
			/** The space between columns in the text frame. */
			public readonly textColumnGutter: any;
			/**
			 * The maximum column width of the columns in the text frame. 
			 * Use 0 to indicate no upper limit.
			 */
			public readonly textColumnMaxWidth: any;
			/**
			 * If true, maintains column width when the text frame is 
			 * resized. If false, causes columns to resize when the text 
			 * frame is resized. Note: When true, resizing the frame can 
			 * change the number of columns in the frame.
			 */
			public readonly useFixedColumnWidth: boolean;
			/**
			 * If true, maintains column width between a min and max range 
			 * when the text frame is resized. If false, causes columns to 
			 * resize when the text frame is resized. Note: When true, 
			 * resizing the frame can change the number of columns in the 
			 * frame.
			 */
			public readonly useFlexibleColumnWidth: boolean;
			/**
			 * If true, minimum height value is used during the auto-sizing 
			 * of text frame.
			 */
			public readonly useMinimumHeightForAutoSizing: boolean;
			/**
			 * If true, minimum width value is used during the auto-sizing 
			 * of text frame.
			 */
			public readonly useMinimumWidthForAutoSizing: boolean;
			/** If true, line-breaks are not introduced after auto sizing. */
			public readonly useNoLineBreaksForAutoSizing: boolean;
			/** Vertically justify balanced across all columns. */
			public verticalBalanceColumns: boolean;
			/** The vertical alignment of the text content. */
			public readonly verticalJustification: Adobe.Incopy.VerticalJustification;
			/**
			 * The maximum amount of vertical space between two paragraphs. 
			 * Note: Valid only when vertical justification is justified; 
			 * the specified amount is applied in addition to the space 
			 * before or space after values defined for the paragraph.
			 */
			public readonly verticalThreshold: any;
			/**
			 * Adds an event listener.
			 * @param {string} eventTypeParam The event type.
			 * @param {any} handlerParam The event handler. Can accept: 
			 * File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public addEventListenerTextFramePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): Adobe.Incopy.EventListener;
			/**
			 * Resolves the object specifier, creating an array of object 
			 * references.
			 */
			public getElements(): any;
			/**
			 * Removes the event listener.
			 * @param {string} eventTypeParam The registered event type.
			 * @param {any} handlerParam The registered event handler. Can 
			 * accept: File or JavaScript Function.
			 * @param {boolean} capturesParam This parameter is obsolete. 
			 * (Optional)
			 */
			public removeEventListenerTextFramePreference(eventTypeParam: string, handlerParam: any, capturesParam: boolean): boolean;
			/** Retrieves the object specifier. */
			public toSpecifier(): string;
		}
	}
}