/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DynamicTriggerEvents extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** target is triggered on a button or self click. */
			public static readonly ON_CLICK: Adobe.Indesign.DynamicTriggerEvents;
			/** target is triggered on clicking on the page. */
			public static readonly ON_PAGE_CLICK: Adobe.Indesign.DynamicTriggerEvents;
			/** target is triggered on loading of the page. */
			public static readonly ON_PAGE_LOAD: Adobe.Indesign.DynamicTriggerEvents;
			/** target is triggered on a button release. */
			public static readonly ON_RELEASE: Adobe.Indesign.DynamicTriggerEvents;
			/** target is triggered on a button rolloff. */
			public static readonly ON_ROLLOFF: Adobe.Indesign.DynamicTriggerEvents;
			/** target is triggered on a button or self rollover. */
			public static readonly ON_ROLLOVER: Adobe.Indesign.DynamicTriggerEvents;
			/** target is triggered on self click. */
			public static readonly ON_SELF_CLICK: Adobe.Indesign.DynamicTriggerEvents;
			/** target is triggered on self rollover. */
			public static readonly ON_SELF_ROLLOVER: Adobe.Indesign.DynamicTriggerEvents;
			/**
			 * target is triggered on loading of the state in a multi-state 
			 * object.
			 */
			public static readonly ON_STATE_LOAD: Adobe.Indesign.DynamicTriggerEvents;
			/**
			 * Alias for ON_CLICK. target is triggered on a button or self 
			 * click.
			 */
			public static readonly onClick: Adobe.Indesign.DynamicTriggerEvents;
			/**
			 * Alias for ON_PAGE_CLICK. target is triggered on clicking on 
			 * the page.
			 */
			public static readonly onPageClick: Adobe.Indesign.DynamicTriggerEvents;
			/**
			 * Alias for ON_PAGE_LOAD. target is triggered on loading of 
			 * the page.
			 */
			public static readonly onPageLoad: Adobe.Indesign.DynamicTriggerEvents;
			/**
			 * Alias for ON_RELEASE. target is triggered on a button 
			 * release.
			 */
			public static readonly onRelease: Adobe.Indesign.DynamicTriggerEvents;
			/**
			 * Alias for ON_ROLLOFF. target is triggered on a button 
			 * rolloff.
			 */
			public static readonly onRolloff: Adobe.Indesign.DynamicTriggerEvents;
			/**
			 * Alias for ON_ROLLOVER. target is triggered on a button or 
			 * self rollover.
			 */
			public static readonly onRollover: Adobe.Indesign.DynamicTriggerEvents;
			/** Alias for ON_SELF_CLICK. target is triggered on self click. */
			public static readonly onSelfClick: Adobe.Indesign.DynamicTriggerEvents;
			/**
			 * Alias for ON_SELF_ROLLOVER. target is triggered on self 
			 * rollover.
			 */
			public static readonly onSelfRollover: Adobe.Indesign.DynamicTriggerEvents;
			/**
			 * Alias for ON_STATE_LOAD. target is triggered on loading of 
			 * the state in a multi-state object.
			 */
			public static readonly onStateLoad: Adobe.Indesign.DynamicTriggerEvents;
			/** Constructor */
			public constructor();
		}
	}
}