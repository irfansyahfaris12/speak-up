import { useQuery } from "@tanstack/react-query";
import { getReporsByUnit } from "../lib/function/report";

export function useRepots(unit,userId, fetchChapters = false) {
  const { isLoading, data, error, refetch } = useQuery({
    queryKey: ["report", unit],
    queryFn: async () => {
      const fetchReports = await getReporsByUnit(unit, userId);
      if (!fetchReports.success) {
        throw new Error(fetchReports.message);
      }

      let result = fetchReports.result;
    //   if (fetchChapters) {
    //     const res = await getCourseChapter(unit);

    //     result.variants = res.data?.chapters || [];
    //   }

      return result;
    },
    staleTime: 300000,
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: !!unit,
  });

  return {
    loading: isLoading,
    report: data,
    refetch,
    error,
  };
}