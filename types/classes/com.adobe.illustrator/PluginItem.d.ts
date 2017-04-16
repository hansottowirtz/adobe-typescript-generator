/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Plugin artwork item */
		class PluginItem extends Adobe.Illustrator.PageItem {
			/**
			 * is the plugin group a tracing?
			 * @type {boolean}
			 * @readonly
			 */
			public readonly isTracing: boolean;
			/**
			 * the tracing object associated with this plugin item.
			 * @type {Adobe.Illustrator.TracingObject}
			 * @readonly
			 */
			public readonly tracing: Adobe.Illustrator.TracingObject;
		}
	}
}