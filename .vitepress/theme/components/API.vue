<template>
	<div>
		<h2>{{ method }} <span class="text-sm">{{base}}{{ url }}</span></h2>
		<div>
			<div v-if="query">
				<div class="text-xs font-semibold">METADATA</div>
				<div class="bg-gray-100 dark:bg-[#161618] rounded-lg border border-gray-200 dark:border-gray-900 border-solid my-4 px-2.5">
					<div v-for="[key, item], index of Object.entries(query)" :class="classnames('py-2.5', {
						'border-t border-solid border-gray-300 dark:border-[#2e2e32] ': index !== 0
					})">
						<div class="flex items-center -mt-1">
							<span>{{ key }}</span>
							<span class="ml-2 text-xs text-gray-500">{{ item.type }}</span>
							<span v-if="item.default" class="ml-2 text-xs text-gray-500">Defaults to {{ item.default }}</span>
						</div>
						<div class="text-xs mt-1">{{ item.description }}</div>
					</div>
				</div>
			</div>

			<div v-if="body">
				<div class="text-xs font-semibold">BODY PARAMS</div>
				<div class="bg-gray-100 dark:bg-[#161618] rounded-lg border border-gray-200 dark:border-gray-900 border-solid my-4 px-2.5">
					<div v-for="[key, item], index of Object.entries(body)" :class="classnames('py-2.5', {
						'border-t border-solid border-gray-300 dark:border-[#2e2e32] ': index !== 0
					})">
						<div class="flex items-center -mt-1">
							<span>{{ key }}</span>
							<span class="ml-2 text-xs text-gray-500">{{ item.type }}</span>
							<span v-if="item.default" class="ml-2 text-xs text-gray-500">Defaults to {{ item.default }}</span>
						</div>
						<div class="text-xs mt-1">{{ item.description }}</div>
					</div>
				</div>
			</div>

			<div v-if="results">

			<div class="text-xs font-semibold">RESPONSES</div>
			<div class="bg-gray-100 dark:bg-[#161618] rounded-lg border border-gray-200 dark:border-gray-900 border-solid my-4">
				<div v-for="[code, item] of Object.entries(results)">
					<div class="bg-gray-200 dark:bg-[#161618] px-2 flex items-center">
						<div :class="classnames(
							'w-2 h-2 rounded-full mr-1',
							code.startsWith('2') ? 'bg-green-500' : 'bg-red-500'
						)" />
						{{ code }}
					</div>
					<div class="p-2 max-h-[500px] overflow-auto">
   					<vue-json-pretty :data="item" showIcon :theme="isDark ? 'dark' : 'light'" />
					</div>
				</div>
			</div>
		</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import classnames from "classnames";
import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

interface Data {
	type: "string" | "number" | "boolean" | "object" | "array" | "null";
	description?: string;
	required?: boolean;
	default?: string;
}

defineProps<{
	method: string;
	url: string;
	body?: Record<string, Data>;
	query?: Record<string, Data>;
	results?: Record<string, any>;
}>();

const base = 'https://portal-dev.rosettalab.top/rosetta-open'

const { isDark } = useData()
</script>
