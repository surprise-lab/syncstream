
'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function BackupRestorePage() {
  return (
    <div className="px-10 md:px-20 lg:px-40 flex flex-1 justify-center py-8">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1 gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-white tracking-light text-3xl font-bold leading-tight">
            Backup &amp; Restore
          </h1>
          <p className="text-[#92adc9] text-base font-normal leading-normal">
            Manage your SyncStream configuration and data backups. Create
            manual backups, view automated backup history, and restore from
            previous versions.
          </p>
        </div>
        <div className="flex flex-col gap-6 rounded-lg border border-[#233648] bg-[#192633] p-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-xl font-bold leading-tight">
              Manual Backup
            </h2>
            <p className="text-[#92adc9] text-sm font-normal leading-normal">
              Create a manual backup of your current SyncStream configuration
              and data. This backup will be stored securely and can be used for
              restoration purposes.
            </p>
          </div>
          <div className="flex justify-start">
            <Button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-[#1172d4] hover:bg-[#1172d4]/90 text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="material-symbols-outlined mr-2 text-base">
                add
              </span>
              <span className="truncate">Create Manual Backup</span>
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-lg border border-[#233648] bg-[#192633] p-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-xl font-bold leading-tight">
              Automated Backups
            </h2>
            <p className="text-[#92adc9] text-sm font-normal leading-normal">
              View the history of automated backups created by SyncStream. These
              backups are generated periodically to ensure data integrity and
              availability.
            </p>
          </div>
          <div className="overflow-x-auto">
            <div className="border border-[#324d67] rounded-lg overflow-hidden">
              <table className="min-w-full divide-y divide-[#324d67]">
                <thead className="bg-[#111A22]">
                  <tr>
                    <th
                      className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      scope="col"
                    >
                      Backup ID
                    </th>
                    <th
                      className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      scope="col"
                    >
                      Timestamp
                    </th>
                    <th
                      className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      scope="col"
                    >
                      Status
                    </th>
                    <th
                      className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      scope="col"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#324d67]">
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-mono text-[#92adc9]">
                      BKP-20240115-001
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                      2024-01-15 02:00 AM
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-500/20 px-2.5 py-1 text-xs font-medium text-green-400">
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <button className="flex items-center gap-2 text-[#1172d4] hover:text-[#1172d4]/90 text-sm font-medium">
                        <span className="material-symbols-outlined text-base">
                          restore
                        </span>
                        Restore
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-mono text-[#92adc9]">
                      BKP-20240114-002
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                      2024-01-14 02:00 AM
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-500/20 px-2.5 py-1 text-xs font-medium text-green-400">
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <button className="flex items-center gap-2 text-[#1172d4] hover:text-[#1172d4]/90 text-sm font-medium">
                        <span className="material-symbols-outlined text-base">
                          restore
                        </span>
                        Restore
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-mono text-[#92adc9]">
                      BKP-20240113-001
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                      2024-01-13 02:00 AM
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-500/20 px-2.5 py-1 text-xs font-medium text-green-400">
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <button className="flex items-center gap-2 text-[#1172d4] hover:text-[#1172d4]/90 text-sm font-medium">
                        <span className="material-symbols-outlined text-base">
                          restore
                        </span>
                        Restore
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-mono text-[#92adc9]">
                      BKP-20240112-002
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                      2024-01-12 02:00 AM
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-green-500/20 px-2.5 py-1 text-xs font-medium text-green-400">
                        <span className="material-symbols-outlined text-sm">
                          check_circle
                        </span>
                        Completed
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <button className="flex items-center gap-2 text-[#1172d4] hover:text-[#1172d4]/90 text-sm font-medium">
                        <span className="material-symbols-outlined text-base">
                          restore
                        </span>
                        Restore
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 whitespace-nowrap text-sm font-mono text-[#92adc9]">
                      BKP-20240111-001
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-[#92adc9]">
                      2024-01-11 02:00 AM
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <span className="inline-flex items-center gap-x-1.5 rounded-full bg-yellow-500/20 px-2.5 py-1 text-xs font-medium text-yellow-400">
                        <span className="material-symbols-outlined text-sm">
                          warning
                        </span>
                        Failed
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
                      <button className="flex items-center gap-2 text-gray-500 text-sm font-medium cursor-not-allowed">
                        <span className="material-symbols-outlined text-base">
                          restore
                        </span>
                        Restore
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 rounded-lg border border-yellow-500/50 bg-yellow-500/10 p-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-xl font-bold leading-tight">
              Restore from Backup
            </h2>
            <p className="text-yellow-200/80 text-sm font-normal leading-normal">
              <span className="font-bold">Warning:</span> Restoring from a
              backup will overwrite your current configuration and data. This
              action cannot be undone. Please proceed with caution.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-end gap-4">
            <label className="flex flex-col w-full sm:w-auto flex-1">
              <span className="text-white text-sm font-medium mb-2">
                Select Backup to Restore
              </span>
              <Select>
                <SelectTrigger className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-md text-white focus:outline-0 focus:ring-2 focus:ring-[#1172d4] border border-[#324d67] bg-[#192633] focus:border-[#1172d4] h-10 bg-[image:--select-button-svg] placeholder:text-[#92adc9] px-3 py-2 text-sm font-normal leading-normal">
                  <SelectValue placeholder="Choose a backup..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bkp-1">BKP-20240115-001</SelectItem>
                  <SelectItem value="bkp-2">BKP-20240114-002</SelectItem>
                  <SelectItem value="bkp-3">BKP-20240113-001</SelectItem>
                  <SelectItem value="bkp-4">BKP-20240112-002</SelectItem>
                </SelectContent>
              </Select>
            </label>
            <Button className="flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-4 bg-yellow-500 hover:bg-yellow-600 text-black text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="material-symbols-outlined mr-2 text-base">
                restore
              </span>
              <span className="truncate">Restore from Selected Backup</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
